using cadastro_funcionarios.API.Data;
using CadastroFuncionarios.API;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cadastro_funcionarios.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroFuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public CadastroFuncionarioController(DataContext context) 
        { 
            _context = context; 
        }

        [HttpGet]
        public async Task<ActionResult<List<CadastroFuncionario>>> GetCadastroFuncionarios()
        {
            return Ok(await _context.Funcionarios.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<CadastroFuncionario>>> CreateCadastroFuncionarios(CadastroFuncionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            await _context.SaveChangesAsync();
            return Ok(await _context.Funcionarios.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<CadastroFuncionario>>> UpdateCadastroFuncionarios(CadastroFuncionario funcionario)
        {
            var dbFunc = await _context.Funcionarios.FindAsync(funcionario.Id);
            if (dbFunc == null)
                return BadRequest("Funcionario não encontrato.");
                dbFunc.NomeCompleto = funcionario.NomeCompleto;
                dbFunc.NomeSocial = funcionario.NomeSocial;
                dbFunc.Logradouro = funcionario.Logradouro;
                dbFunc.Rg = funcionario.Rg;
                dbFunc.Cpf = funcionario.Cpf;
                dbFunc.DataNascimento = funcionario.DataNascimento;
                dbFunc.Celular = funcionario.Celular;
                dbFunc.Cargo = funcionario.Cargo;

            await _context.SaveChangesAsync();
            return Ok (await _context.Funcionarios.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<CadastroFuncionario>>> DeleteCadastroFuncionarios(int id)
        {
            var dbFunc = await _context.Funcionarios.FindAsync(id);
            if (dbFunc == null)
                return BadRequest("Funcionario não encontrato.");

            _context.Funcionarios.Remove(dbFunc);
            await _context.SaveChangesAsync();

            return Ok(await _context.Funcionarios.ToListAsync());
        }
    }
}
