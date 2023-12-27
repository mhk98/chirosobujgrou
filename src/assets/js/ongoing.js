// Fetch data from the API
fetch("https://chirosobujgroup-backend.onrender.com/api/v1/ongoing/")
  .then((response) => response.json())
  .then((data) => {
    const projectContainer = document.querySelector(".col");

    // Assuming you want to display the first product from the API response
    const project = data.data[0];

    // Create a project card element
    const projectCard = document.createElement("div");
    projectCard.className =
      "property-grid-7 property-block bg-white transation-this";

    // Populate the product card elements with API data
    const projectImage = document.getElementById("project-image");
    projectImage.src = project.Image;

    const projectTitle = document.getElementById("project-title");
    projectTitle.textContent = project.Title;

    const productFlats = document.getElementById("product-flat");
    productFlats.textContent = project.Flat; // Assuming quantity represents the number of beds

    const productFloor = document.getElementById("product-floor");
    productFloor.textContent = project.Floor;

    const productArea = document.getElementById("product-area");
    productArea.textContent = project.Area; // Replace with actual area data

    // Append the populated product card to the container
    projectContainer.appendChild(projectCard);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
