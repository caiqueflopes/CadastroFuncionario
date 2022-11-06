using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cadastro_funcionarios.API.Migrations
{
    public partial class Funcionarios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Place",
                table: "Funcionarios",
                newName: "Rg");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Funcionarios",
                newName: "NomeSocial");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Funcionarios",
                newName: "NomeCompleto");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Funcionarios",
                newName: "DataNascimento");

            migrationBuilder.AddColumn<string>(
                name: "Cargo",
                table: "Funcionarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Celular",
                table: "Funcionarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Cpf",
                table: "Funcionarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cargo",
                table: "Funcionarios");

            migrationBuilder.DropColumn(
                name: "Celular",
                table: "Funcionarios");

            migrationBuilder.DropColumn(
                name: "Cpf",
                table: "Funcionarios");

            migrationBuilder.RenameColumn(
                name: "Rg",
                table: "Funcionarios",
                newName: "Place");

            migrationBuilder.RenameColumn(
                name: "NomeSocial",
                table: "Funcionarios",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "NomeCompleto",
                table: "Funcionarios",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "DataNascimento",
                table: "Funcionarios",
                newName: "FirstName");
        }
    }
}
