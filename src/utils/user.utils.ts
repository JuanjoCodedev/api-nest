const PASSWORD_RULE: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
const PASSWORD_RULE_MESSAGE = 'La contraseña debe contener una mayúscula, número y caracter especial';

const EMAIL_RULE: RegExp = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const EMAIL_RULE_MESSAGE = 'Correo electrónico es invalido';

export const REGEX = {
  PASSWORD_RULE,
  EMAIL_RULE,
};

export const MESSAGE_RULE = {
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE,
};
