var path = require('path');
var templatesDir = path.resolve(__dirname, 'templates/inline');
var EmailTemplate = require('email-templates').EmailTemplate;

function templateGenerator(templateName){
	return new EmailTemplate(path.join(templatesDir, templateName));
}

module.exports =  {
 generate : templateGenerator,
};
