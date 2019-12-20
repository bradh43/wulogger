resource "aws_cognito_user_pool" "wulogger_user_pool" {
  name = "wulogger_user_pool"
}

// wuxclogger@gmail.com
// Require numbers
// Require special character
// Require uppercase letters
// Require lowercase letters
// Minimum length 8
// 7 Days to expire temp password
// Allow users to sign themselves up true

//	birthdate		
// email		
// picture
// family name	
// given name	
// preferred username

// Email address or phone number - Users can use an email address or phone number as their "username" to sign up and sign in.
//      Allow email addresses

resource "aws_cognito_user_pool" "wulogger_user_pool" {
  name                       = "wulogger-user-pool"
  email_verification_subject = "WuLogger Device Verification Code"
  email_verification_message = "Welcome to WuLogger! Please use the following code {####}"
  sms_verification_message   = "{####} WuLogger code"
  alias_attributes           = ["email", "preferred_username"]
  auto_verified_attributes   = ["email"]

  verification_message_template {
    default_email_option = "CONFIRM_WITH_CODE"
  }

  email_configuration {
    reply_to_email_address = "wuxclogger@gmail.com"
  }

  password_policy {
    minimum_length    = 8
    require_lowercase = false
    require_numbers   = true
    require_symbols   = false
    require_uppercase = true
  }

  lambda_config {
    create_auth_challenge          = "${aws_lambda_function.main.arn}"
    custom_message                 = "${aws_lambda_function.main.arn}"
    define_auth_challenge          = "${aws_lambda_function.main.arn}"
    post_authentication            = "${aws_lambda_function.main.arn}"
    post_confirmation              = "${aws_lambda_function.main.arn}"
    pre_authentication             = "${aws_lambda_function.main.arn}"
    pre_sign_up                    = "${aws_lambda_function.main.arn}"
    pre_token_generation           = "${aws_lambda_function.main.arn}"
    user_migration                 = "${aws_lambda_function.main.arn}"
    verify_auth_challenge_response = "${aws_lambda_function.main.arn}"
  }

  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = false
    name                     = "email"
    required                 = true

    string_attribute_constraints {
      min_length = 7
      max_length = 15
    }
  }

  schema {
    attribute_data_type      = "Number"
    developer_only_attribute = true
    mutable                  = true
    name                     = "mynumber"
    required                 = false

    number_attribute_constraints {
      min_value = 2
      max_value = 6
    }
  }

  sms_configuration {
    external_id    = "12345"
    sns_caller_arn = "${aws_iam_role.cidp.arn}"
  }

    tags = "${merge(map( 
        "name", "wulogger-user-pool", 
    ), var.wulogger_tags)}"
}