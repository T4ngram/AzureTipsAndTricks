(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{499:function(e,n,a){"use strict";a.r(n);var t=a(43),s=Object(t.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("ML.NET Overview"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"azure-tips-and-tricks-part-174-machine-learning-with-ml-net-and-azure-functions-part-1-of-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-tips-and-tricks-part-174-machine-learning-with-ml-net-and-azure-functions-part-1-of-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Tips and Tricks Part 174 - Machine Learning with ML.NET and Azure Functions - Part 1 of 2")]),e._v(" "),a("h4",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),a("p",[e._v("Machine learning can be tricky. Fortunately, Azure is coming up with ways to make it easier for developers to jump into machine learning. "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/updates/ml-net?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("ML.NET"),a("OutboundLink")],1),e._v(" is the machine learning framework that Microsoft Research made just for .NET developers so you can do everything inside Visual Studio. If you haven’t already been playing with it, I think you’re going to love it. And when you are ready to deploy your ML.NET algorithm, you can use serverless architecture through "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/functions?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),a("OutboundLink")],1),e._v("— the “don’t worry about it” option when you want to get an app up and running but don’t necessarily want to mess around with servers and containers.")]),e._v(" "),a("h4",{attrs:{id:"serverless-machine-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-machine-learning","aria-hidden":"true"}},[e._v("#")]),e._v(" Serverless Machine Learning")]),e._v(" "),a("p",[e._v("This is "),a("router-link",{attrs:{to:"./tip174/"}},[e._v("part 1")]),e._v(" of a "),a("router-link",{attrs:{to:"./tip175/"}},[e._v("two part")]),e._v(" post on ML.NET inspired by Luis Quintanilla’s "),a("a",{attrs:{href:"http://luisquintanilla.me/2018/08/21/serverless-machine-learning-mlnet-azure-functions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(" about using ML.NET with Azure Functions, where he took these two great ideas and combined them. You will use ML.NET locally to train your machine learning model. Then you will create an Azure environment with a storage account and Azure Function to host your machine learning app. The final step, building an app that uses your model, will be covered in the next post.")],1),e._v(" "),a("h4",{attrs:{id:"create-your-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-model","aria-hidden":"true"}},[e._v("#")]),e._v(" Create your model")]),e._v(" "),a("p",[e._v("For the ML.NET portion of this quick project, let’s build the iris categorization model from the "),a("a",{attrs:{href:"https://www.microsoft.com/net/learn/machine-learning-and-ai/get-started-with-ml-dotnet-tutorial?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started in 10 minutes"),a("OutboundLink")],1),e._v(" ML.NET tutorial. As a prerequisite, you’ll want to install "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI 2.0"),a("OutboundLink")],1),e._v(",  "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),a("OutboundLink")],1),e._v(" and a recent version of "),a("a",{attrs:{href:"https://www.microsoft.com/net/download/dotnet-core/2.2?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iris-machinelearning.png")}}),e._v(" "),a("p",[e._v("Open a command prompt and create a new folder for your ML.NET project.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> mkdir demo\n> cd demo\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Next, create a new solution as well as a new console project and install the ML.NET package.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> dotnet new solution\n> dotnet new console -o model\n> dotnet sln add model/model.csproj\n> cd model\n> dotnet add package Microsoft.ML --version 0.4.0\n> dotnet restore\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Create a data directory under model.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> mkdir data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Open the "),a("a",{attrs:{href:"https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCI Machine Learning Repository: Iris Data Set"),a("OutboundLink")],1),e._v(", copy and paste the data into VS Code, or TextEdit or Notepad, and save it as "),a("strong",[e._v("iris-data.txt")]),e._v(" in the "),a("strong",[e._v("data")]),e._v(" directory.\nNow it’s time to write some code. Open up your project in Visual Studio Code and create a couple of data structure classes: "),a("strong",[e._v("IrisData.cs")]),e._v(" and "),a("strong",[e._v("IrisPrediction.cs")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\nusing Microsoft.ML.Runtime.Api;\n\n        public class IrisData\n        {\n            [Column("0")]\n            public float SepalLength;\n\n            [Column("1")]\n            public float SepalWidth;\n\n            [Column("2")]\n            public float PetalLength;\n\n            [Column("3")]\n            public float PetalWidth;\n\n            [Column("4")]\n            [ColumnName("Label")]\n            public string Label;\n        }\n\n        public class IrisPrediction\n        {\n            [ColumnName("PredictedLabel")]\n            public string PredictedLabels;\n        }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br")])]),a("p",[e._v("Add a "),a("strong",[e._v("model")]),e._v(" class to perform the machine learning training.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('using System.Threading.Tasks;\nusing Microsoft.ML;\nusing Microsoft.ML.Data;\nusing Microsoft.ML.Trainers;\nusing Microsoft.ML.Transforms;\n\n    class Model\n    {\n        public static async Task<PredictionModel<IrisData, IrisPrediction>> Train(LearningPipeline pipeline, string dataPath, string modelPath)\n        {\n            // Load Data\n            pipeline.Add(new TextLoader(dataPath).CreateFrom<IrisData>(separator: \',\'));\n\n            // Transform Data\n            // Assign numeric values to text in the "Label" column, because\n            // only numbers can be processed during model training\n            pipeline.Add(new Dictionarizer("Label"));\n\n            // Vectorize Features\n            pipeline.Add(new ColumnConcatenator("Features", "SepalLength", "SepalWidth", "PetalLength", "PetalWidth"));\n\n            // Add Learner\n            pipeline.Add(new StochasticDualCoordinateAscentClassifier());\n\n            // Convert Label back to text\n            pipeline.Add(new PredictedLabelColumnOriginalValueConverter() { PredictedLabelColumn = "PredictedLabel" });\n\n            // Train Model\n            var model = pipeline.Train<IrisData, IrisPrediction>();\n\n            // Persist Model\n            await model.WriteAsync(modelPath);\n\n            return model;\n        }\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br")])]),a("p",[e._v("Place your logic inside the Program.cs file to run through the process:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    class Program\n    {\n        static void Main(string[] args)\n        {\n            string dataPath = "/Users/mbcrump/Documents/demo/model/data/iris-data.txt";\n\n            string modelPath = "/Users/mbcrump/Documents/demo/model/model.zip";\n\n            var model = Model.Train(new LearningPipeline(), dataPath, modelPath).Result;\n\n            // Test data for prediction\n            var prediction = model.Predict(new IrisData()\n            {\n                SepalLength = 3.3f,\n                SepalWidth = 1.6f,\n                PetalLength = 0.2f,\n                PetalWidth = 5.1f\n            });\n\n            Console.WriteLine($"Predicted flower type is: {prediction.PredictedLabels}");\n\n        }\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("Run the model project to create a new "),a("strong",[e._v("model.zip")]),e._v(" file in your root directory. Below is the results that I got.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:model mbcrump$ dotnet run\nAutomatically adding a MinMax normalization transform, use 'norm=Warn' or 'norm=No' to turn this behavior off.\nUsing 4 threads to train.\nAutomatically choosing a check frequency of 4.\nAuto-tuning parameters: maxIterations = 9996.\nAuto-tuning parameters: L2 = 2.668802E-05.\nAuto-tuning parameters: L1Threshold (L1/L2) = 0.\nUsing best model from iteration 500.\nNot training a calibrator because it is not needed.\nPredicted flower type is: Iris-virginica\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Congratulations! You’ve trained a machine learning model with ML.NET that categorizes irises.")]),e._v(" "),a("h4",{attrs:{id:"set-up-your-azure-environment-using-cloud-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-azure-environment-using-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Set up your Azure environment using Cloud Shell")]),e._v(" "),a("p",[e._v("We'll use Azure Cloud Shell which uses the "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(" to set up our Azure environment. The easiest way to do this is to sign in to your Azure portal account and click on the "),a("strong",[e._v("cloud shell icon")]),e._v("  shown below to open a bash shell or go to "),a("a",{attrs:{href:"http://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell.azure.com"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshell.PNG")}}),e._v(" "),a("p",[e._v("Once logged in, create a new resource group for this project in the bash shell (and replace “mlnetdemo” as well as the location with one of your own).")]),e._v(" "),a("p",[a("code",[e._v("$ az group create --name mlnetdemo --location westus")])]),e._v(" "),a("p",[e._v("Add storage to this resource group.")]),e._v(" "),a("p",[e._v("NOTE: You'll have to change the name below to something unique")]),e._v(" "),a("p",[a("code",[e._v("$ az storage account create --name mlnetdemostorage --location westus --resource-group mlnetdemo --sku Standard_LRS")])]),e._v(" "),a("p",[e._v("Create your Azure Function and configure it to use the beta runtime which supports .NET Core.")]),e._v(" "),a("p",[e._v("NOTE: You'll have to change the name below to something unique")]),e._v(" "),a("p",[a("code",[e._v("$ az functionapp create --name mlnetdemoazfunction1 --storage-account mlnetdemostorage1 --consumption-plan-location westus --resource-group mlnetdemo")])]),e._v(" "),a("p",[a("code",[e._v("$ az functionapp config appsettings set --name mlnetdemoazfunction1 --resource-group mlnetdemo --settings FUNCTIONS_EXTENSION_VERSION=beta")])]),e._v(" "),a("h4",{attrs:{id:"deploy-your-machine-learning-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-machine-learning-model","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy your machine learning model")]),e._v(" "),a("p",[e._v("To get your model up to the server, you will need to get the keys to your storage account. Use the following command in the bash window to get it.")]),e._v(" "),a("p",[a("code",[e._v("$ az storage account keys list --account-name mlnetdemostorage1 --resource-group mlnetdemo")])]),e._v(" "),a("p",[e._v("You'll see the following:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[\n  {\n    "keyName": "key1",\n    "permissions": "Full",\n    "value": "YOURKEY"\n  },\n  {\n    "keyName": "key2",\n    "permissions": "Full",\n    "value": "NONEYOBUSINESS"\n  }\n]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("Use the following command to create a new directory called "),a("code",[e._v("models")]),e._v(" to put your model in using your account key (this can be found in the navigation window under "),a("strong",[e._v("Settings | Access keys")]),e._v(").")]),e._v(" "),a("p",[a("code",[e._v("$ az storage container create --name models --account-key YOURKEY --account-name mlnetdemostorage1")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/blob_model.png")}}),e._v(" "),a("p",[e._v("Since we are using Cloud Shell, it will be easier to use the Azure Portal for this step. You can also use the Azure CLI if you wish.  Browse to your version of the "),a("strong",[e._v("mlnetdemo")]),e._v(" resource group and drill down to your storage resource that you created earlier. Drill into the blobs and you see the new folder "),a("code",[e._v("models")]),e._v(" subdirectory. Upload the "),a("strong",[e._v("model.zip")]),e._v(" here which can be found on your hard drive.")]),e._v(" "),a("p",[e._v("In part 2 (coming tomorrow), we’ll look at building an app hosted by your Azure Function that will run images against your iris categorizer.")])])},[],!1,null,null,null);n.default=s.exports}}]);