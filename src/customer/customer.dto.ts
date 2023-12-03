import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGE_RULE, REGEX } from '../utils/user.utils';

export class userDTO {
  @IsNotEmpty()
  @IsEmail()
  @Length(6, 25)
  @Matches(REGEX.EMAIL_RULE, { message: MESSAGE_RULE.EMAIL_RULE_MESSAGE })
  readonly useremail: string;

  @IsNotEmpty()
  @Length(6, 10)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGE_RULE.PASSWORD_RULE_MESSAGE })
  readonly userpassword: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly username: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly userlastname: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly userdepartament: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly usercity: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly useraddress: string;

  @IsNotEmpty()
  readonly roles: number;

  @IsNotEmpty()
  readonly userstate: boolean;

  @IsNotEmpty()
  @Length(12, 12)
  readonly userphone: string;

  @IsNotEmpty()
  @Length(6, 12)
  readonly did: string;
}

export class userUpdateDTO {
  @IsNotEmpty()
  @IsEmail()
  @Length(6, 25)
  @Matches(REGEX.EMAIL_RULE, { message: MESSAGE_RULE.EMAIL_RULE_MESSAGE })
  readonly useremail: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly username: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly userlastname: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly userdepartament: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly usercity: string;

  @IsNotEmpty()
  @Length(6, 25)
  readonly useraddress: string;

  @IsNotEmpty()
  readonly usercharge: number;

  @IsNotEmpty()
  readonly userstate: boolean;

  @IsNotEmpty()
  @Length(12, 12)
  readonly userphone: string;

  @IsNotEmpty()
  @Length(6, 12)
  readonly did: string;
}
