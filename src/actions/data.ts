const baseUrl = "https://texnoark.ilyosbekdev.uz";

export async function getCategories() {
  try {
    const res = await fetch(`${baseUrl}/category/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const res = await fetch(`${baseUrl}/products/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
