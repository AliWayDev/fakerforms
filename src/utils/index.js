export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getQuestionType = (type) => {
  switch (type) {
    case "text_single":
      return "Text";
    case "text_multi":
      return "Text Multi";
    case "integer":
      return "Integer";
    case "checkbox":
      return "Checkbox";
    default:
      return "";
  }
};

export const getTitleOfActionsPage = (type) => {
  switch (type) {
    case "template":
      return "Create Template";
    case "form":
      return "Create Form";
    case "editFrom":
      return "Edit Form";
    case "editTemplate":
      return "Edit Template";
    default:
      return "";
  }
};

export const checkThePayloadCreateTemplate = (data) => {
  let count = 0;

  for (let i of data.questions) {
    if (!i.title || !i.description) {
      count++;
    }
  }
  
  if (!data.id || !data.template || count > 0) {
    return false;
  } else {
    return true;
  }
};
