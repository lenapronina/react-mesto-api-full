const linkValidator = (link) => {
  let valid = false;
  const noSpace = (/\s/.test(link));
  const mainValidation = /https?:\/\/(w*\.)?[\d\w\-.[+()~:/\\?#\]@!$&'*,;=]{2,}#?/.test(link);
  if (!noSpace && mainValidation) {
    valid = true;
  }
  return valid;
};

module.exports = linkValidator;
