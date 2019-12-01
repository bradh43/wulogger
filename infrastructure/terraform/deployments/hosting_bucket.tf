resource "aws_s3_bucket" "hosting-bucket" {

  bucket = "hosting-bucket"
  tags = "${merge(map( 
            "name", "hosting-bucket", 
        ), var.wulogger_tags)}"
}