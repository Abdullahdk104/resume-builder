// Print function to trigger the browser's print dialog
function printResume(): void {
    window.print();
  }
  
  // Add an event listener to the print button
  document.getElementById("print-btn")?.addEventListener("click", printResume);
  