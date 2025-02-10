resource "aws_vpc" "tef" {
  cidr_block       = var.vpc

  tags = {
    Name = "git_VPC1"
  }
}