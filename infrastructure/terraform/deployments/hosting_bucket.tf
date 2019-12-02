variable "bucket_name" {
  default = "hosting-bucket"
}

resource "aws_s3_bucket" "hosting-bucket" {

  bucket = "${var.bucket_name}"
  acl    = "public-read"

  tags = "${merge(map( 
            "name", "${var.bucket_name}", 
        ), var.wulogger_tags)}"

      policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*",
      "Principal": "*"
    }
  ]
}
EOF

  website {
    index_document = "public/index.html"
    error_document = "public/index.html"
  }
}

output "website_domain" {
  value = "${aws_s3_bucket.react_bucket.website_domain}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.react_bucket.website_endpoint}"
}