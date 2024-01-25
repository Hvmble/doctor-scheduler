{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }

	"Model Schema Creator": {
		"prefix": "modelSchema",
		"body": [
			"import mongoose from \"mongoose\";",
			"",
			"const ${1:nameSchema}Schema = new mongoose.Schema({",
			"	${2:collectionsOfSchema}"
			"});",
			"const ${1:nameSchema}Model = mongoose.model(\"${1:nameSchema}\", ${1:nameSchema}Schema);",
			"export {${1:nameSchema}Model, ${1:nameSchema}Schema};"
		],
		"description": "Create Model Schema"
	},

	"Collection of Schema Creator with type, required, validate, index and default": {
		"prefix": "collectionSchemaComplete",
		"body": [
			"${1:nameCollection}:{",
			"	type: mongoose.Schema.Types.${2:TypeOfCollection},",
			"	required: [${3:isRequired}, \"${4:nameSchema} ${1:nameCollection} is required\"],",
			"	validate: {"
			"		validator: (a_${1:nameCollection})=>{",
			"			const len = a_${1:nameCollection}.length;",
			"			return ${5:validations; for example len >=5 && len <=100};",
			"		},",
			"		message:\"${6:error message of validator}\"",
			"	},",
			"	index: {unique:true},"
			"	default:${7:default value}",
			"},",
			"${8}"
			
		],
		"description": "Create Collection Schema"
	},

	"Collection of Schema Creator with type, required": {
		"prefix": "collectionSchemaIdentificatorOrPassword",
		"body": [
			"${1:nameCollection}:{",
			"	type: mongoose.Schema.Types.${2:TypeOfCollection},",
			"	required: [${3:isRequired}, \"${4:nameSchema} ${1:nameCollection} is required\"],",
			"},",
			"${5}"
		],
		"description": "Create Collection Schema"
	},
	
	"Collection of Schema Creator with type and default": {
		"prefix": "collectionSchemaSimple",
		"body": [
			"${1:nameCollection}:{",
			"	type: mongoose.Schema.Types.${2:TypeOfCollection},",
			"	default:${3:default value}",
			"},",
			"${4}"
		],
		"description": "Create Collection Schema"
	},
	
	
	
	"Controller CRUD Creator ": {
		"prefix": "collectionSchemaSimple",
		"body": [
			"${1:nameCollection}",

			
			
		],
		"description": "Create Collection Schema"
	},
}