terraform {
  backend "s3" {
    bucket = "git-actions-0147"
    key    = "gitactions/terraform.tfstate"
    region = "eu-central-1"
  }
}
