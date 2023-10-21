import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGE_RULE, REGEX } from 'src/utils/user.utils';

export class AuthDTO {
  @IsNotEmpty()
  @IsEmail()
  @Length(2, 25)
  @Matches(REGEX.EMAIL_RULE, { message: MESSAGE_RULE.EMAIL_RULE_MESSAGE })
  readonly useremail: string;

  @IsNotEmpty()
  @Length(6, 10)
  readonly userpassword: string;
}
