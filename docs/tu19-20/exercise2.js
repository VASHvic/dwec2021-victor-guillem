const links = document.querySelectorAll("a[href]");

for (const link of links) {
  if (
    link.getAttribute("href").includes("://") &&
    !link.getAttribute("href").startsWith("http://internal.com")
  ) {
    link.style.color = "orange";
  }
}
