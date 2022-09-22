const textarea = document.querySelector(".text_input"),
  name = document.querySelector(".input_name"),
  savebtn = document.querySelector('.save'),
  filetype = document.querySelector('.select');


filetype.addEventListener('change', () => {
  let selectedoption = filetype.options[filetype.selectedIndex].text;
  savebtn.innerText = "Save As " + selectedoption.split(" ")[0]+" File";
})

savebtn.addEventListener('click', () => {
  const blob = new Blob([textarea.value], { type: filetype.value })

  const fileurl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = name.value;
  link.href = fileurl;
  link.click();
  })