using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cadastro_funcionarios.API.Migrations
{
    public partial class FuncionariosLogradouro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Logradouro",
                table: "Funcionarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Logradouro",
                table: "Funcionarios");
        }
    }
}
