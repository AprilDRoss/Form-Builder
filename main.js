// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  console.log(formData[i])

}


// -------- Your Code Goes Here --------
for (var i = 0; i < formData.length; i++) {
  let form = document.querySelector(".fields")
  let obj = formData[i];
  let text;
  if (obj.options.length === 0) {
    text = '<input class="formdata" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  } else {
    text = '<input class="formdata" options="' + obj.options[0].label +'" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  }
  form.insertAdjacentHTML("beforeend", text);
}
//get options for drop-down menu

// var x = document.querySelector("#user-language");
// console.log(x);
// var txt = "All options: ";
// var j;
// for (j = 0; j < x.length; j++) {
//     txt = txt + "\n" + x.options[j].text;
//     console.log(txt);
// }
