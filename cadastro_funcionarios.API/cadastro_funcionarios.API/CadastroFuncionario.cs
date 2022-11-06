namespace CadastroFuncionarios.API
{
    public class CadastroFuncionario
    {
        public int Id { get; set; }
        public string NomeCompleto { get; set; }= String.Empty;
        public string NomeSocial { get; set; } = String.Empty;
        public string Logradouro { get; set; } = String.Empty;
        public string Rg { get; set; } = String.Empty;
        public string Cpf { get; set; } = String.Empty;
        public string DataNascimento { get; set; } = String.Empty;
        public string Celular { get; set; } = String.Empty;
        public string Cargo { get; set; } = String.Empty;
    }
}
