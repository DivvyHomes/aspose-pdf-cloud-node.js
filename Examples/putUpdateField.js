const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/fieldType");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');

const field = {
    name: fieldName,
    type: FieldType.Text,
    values: ["Text field updated value."],
    selectedItems: null,
    rect: null,
    links: null
}

pdfApi.putUpdateField( "PdfWithAcroForm.pdf", fieldName, field, null, BaseTest.remoteTempFolder)
    .then((result) => {
        console.log(result.response);
    });