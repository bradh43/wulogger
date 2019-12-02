variable "bucket_name" {
    default = "wulogger-hosting-react-bucket"
}

resource "aws_s3_bucket" "hosting_react_bucket" {

    bucket = "${var.bucket_name}"
    acl    = "public-read"

    tags = "${merge(map( 
            "name", "${var.bucket_name}", 
        ), var.wulogger_tags)}"

    policy = <<EOF
{
    "Version":"2012-10-17",
    "Statement":[
        {
            "Effect": "Allow",
            "Action":[
                "s3:GetObject"
            ],
            "Resource":[ 
                "arn:aws:s3:::${var.bucket_name}/*"
            ],
            "Principal": "*"
        }
    ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "index.html"
    }
}

output "website_domain" {
  value = "${aws_s3_bucket.hosting_react_bucket.website_domain}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.hosting_react_bucket.website_endpoint}"
}