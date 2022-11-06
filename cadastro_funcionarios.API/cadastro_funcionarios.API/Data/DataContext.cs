using CadastroFuncionarios.API;
using Microsoft.EntityFrameworkCore;

namespace cadastro_funcionarios.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<CadastroFuncionario> Funcionarios => Set<CadastroFuncionario>();
    }
}
