import React from "react";

const RightContent = () => {
  const cardInfo = [
    {
      title: "aws-cli",
      subtitle: "Universal Command Line interface for amazon web service...",
      langu: "python",
      search: "amazon-s3",
      stars: "10922  2000-30k",
      des: "Universal command...",
    },
    {
      title: "git-secrets",
      subtitle:
        "Prevents you from committing secrets and credentials into git..",
      langu: "Shell",
      search: "aws-config",
      stars: "8093 2000-30k",
      des: "prevents you from...",
    },
    {
      title: "serverless-application-model",
      subtitle: "AWS Serverless Application Model...",
      langu: "Python",
      search: "aws-codepipeline",
      stars: "7858 2000-30k",
      des: "AWS severless Appli...",
    },
    {
      title: "chalice",
      subtitle: "Python Serverless Microframework FOR AWS...",
      langu: "Python",
      search: "aws-step-functions",
      stars: "7829 2000-30k",
      des: "Python Serverless Micro..",
    },
    {
      title: "aws-sdk-go",
      subtitle: "Aws-SDK for the Go programming language... ",
      langu: "Go",
      search: "amazon-s3",
      stars: "6879 2000-30k",
      des: " stars:AWS SDK for the...",
    },
    {
      title: "aws-cdk",
      subtitle: "The Aws Cloud Development Kit is a framework...",
      langu: "TypeScript",
      search: "aws-glue",
      stars: "6615 2000-30k",
      des: "The Aws Cloud devel...",
    },
    {
      title: "aws-shell",
      subtitle: "An integrated shell for working with the AWS CLI ...",
      langu: "Python",
      search: "aws-directory-serv...",
      stars: "6092 2000-30k",
      des: "An integrated shell...",
    },
    {
      title: "aws-sam-cli",
      subtitle: "CLI tool build, test,debug and depoly serverless...",
      langu: "Python",
      search: "aws-codepipeline",
      stars: "5211 2000-30k",
      des: "CLI tool for build..",
    },
    {
      title: "aws-sdk-php",
      subtitle: "Official repository of the AWS SDK for PHP...",
      langu: "PHP",
      search: "aws-directory-ser...",
      stars: "5168 2000-30k",
      des: "Official respository...",
    },
    {
      title: "Amazon-dsstne",
      subtitle: "Deep Scalable Sparse Tensor Network Engine...",
      langu: "C++",
      search: "amazon-personalize",
      stars: "4442 2000-30k",
      des: "Deep scalable spars...",
    },
    {
      title: "s2n-tls",
      subtitle: "s2n: an implementation of the TLS/SSL proto...",
      langu: "C",
      search: "aws-directory-serv...",
      stars: "3955 2000-30k",
      des: "s2n: an implementation...",
    },
    {
      title: "aws-doc-sdk-example",
      subtitle: "AWS Code Examples Respository.This repo contains ....",
      langu: "Java",
      search: "aws-directory-serv...",
      stars: "3650 2000-30k",
      des: "Welcome to the aws",
    },
    {
      title: "containers-roadmap",
      subtitle: "This is the public roadmap for AWS container services...",
      langu: "Shell",
      search: "aws-elastic-beanst",
      stars: "3612 2000-30k",
      des: "This is the public road...",
    },
    {
      title: "aws-sdk-java",
      subtitle: "The official aws sdk for java...",
      langu: "Java",
      search: "aws-batch",
      stars: "3546 2000-30k",
      des: "The official AWS SDK...",
    },
    {
      title: "aws-sdk-ruby",
      subtitle: "The official AWS for Ruby...",
      langu: "Ruby",
      search: "aws-ampliy",
      stars: " 2000-30k",
      des: "The official AWS ruby...",
    },
    {
      title: "autogluon",
      subtitle: "autoML for text,image,tabular...",
      langu: "Python",
      search: "amazon-sagemaker",
      stars: "3132 2000-30k",
      des: "autogluon autoML for...",
    },
    {
      title: "aws-lambda-go",
      subtitle: "Libraries ,Samples and tool tohelp Go devlop...",
      langu: "Go",
      search: "aws-lambda",
      stars: "2453 2000-30k",
      des: "Libraries ,sample an...",
    },
    {
      title: "amazon-freertos",
      subtitle: "IoT operating system for Microcontrollers...",
      langu: "C",
      search: "aws-partner-device",
      stars: "2261 2000-30k",
      des: "IoT operating st...",
    },
    {
      title: "aws-react-native",
      subtitle: "Aws Mobile React nativefor moblie develop...",
      langu: "JavaScript",
      search: "aws-amplify",
      stars: "2987 2000-30k",
      des: "Aws Mobile React...",
    },
    {
      title: "gluon-ts",
      subtitle: "Probabilistic time series modeling in python",
      langu: "Python",
      search: "amazon-sagemaker",
      stars: "1867 1000-2000",
      des: "Probabilistic time series..",
    },
    {
      title: "djl",
      subtitle: "An Engine-Agnostic Deep Learning Framework",
      langu: "Java",
      search: "awslabs",
      stars: "1828 1000-2000",
      des: "An Engine-agnostic",
    },
    {
      title: "amazon-ecs-agent",
      subtitle: "Amazon Elastic Container service agents",
      langu: "Go",
      search: "amazon-vpc",
      stars: "1781 1000-2000",
      des: "Amazon Elastic Container ",
    },
    {
      title: "aws-sdk-net",
      subtitle: "The offical aws sdk for .NET for more information...",
      langu: "C#",
      search: "AWS-AMPLIFY",
      stars: "1611 1000-2000",
      des: "The offical aws...",
    },
    {
      title: "lumberyard",
      subtitle: "Amazon Lumberyard is a free AAA game...",
      langu: "C++",
      search: "aws-personal-healt",
      stars: "1470 1000-2000",
      des: "",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <>
        {/* cards */}
        <div className="container">
          <div className="row ">
            <div className="">
              <div
                className="cards-right border card-rap p-2 my-2 "
                key={index}
              >
                <div className="div d-flex ">
                  <img
                    src="https://fomantic-ui.com/images/wireframe/white-image.png"
                    alt=""
                    width="150px"
                    height="150px"
                  />
                  <div className="w-50">
                    <p className="text-bold fs-5">{card.title}</p>
                    <small className="text-muted ">{card.subtitle}</small>
                  </div>
                </div>
                <div className="d-flex mb-4 mt-4  ">
                  <div className="me-5  text-nowrap">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Github reop
                  </div>
                  <div>
                    <img
                      src="https://img.icons8.com/material-sharp/20/000000/link--v1.png"
                      className="me-1"
                    />
                    share
                  </div>
                </div>
                <div className="d-flex lh-lg w-100 border-top pt-2 ">
                  <small>
                    <ul type="none" className="position-gap text-muted w-50">
                      <li>Language:</li>
                      <li className="text-nowrap">search Key:</li>
                      <li>stars:</li>
                      <li>desciption:</li>
                    </ul>
                  </small>
                  <small>
                    <ul type="none" className="ms-3">
                      <li className="language">{card.langu}</li>
                      <li className="searchkey">{card.search}</li>
                      <li className="text-nowrap">{card.stars}</li>
                      <li className="text-nowrap">{card.des}</li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="w-100">
        <div className="rightsidebanner">
          <p className="fs-4">Everything AWS</p>
          <small>Search and discover 6K+ quality AWS repositories</small>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-6"> */}
        <div className="card-width">{cardInfo.map(renderCard)}</div>
        {/* </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RightContent;
