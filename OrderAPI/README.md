# Server-side (First screen with .NET 8)

### Setup
1. Install dependencies:
    ```bash
    dotnet restore
    ```

2. Update the connection string in `appsettings.json`:
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=OrderDB;Trusted_Connection=True;MultipleActiveResultSets=true"
      }
    }
    ```

3. Run the .NET application:
    ```bash
    dotnet run
    ```

### Project Structure
- `Controllers/ProductsController.cs`: API controller for managing products.
- `Models/Product.cs`: Product model.
- `Models/MyDbContext.cs`: DbContext for Entity Framework.
- `Program.cs`: Application entry point.
