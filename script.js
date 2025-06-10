document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;
  
  // Reset all grid-item colors to transparent
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Change color of selected block
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});

