const { PdfApi } = require("asposepdfcloud");
const { PdfAType } = require("asposepdfcloud/src/models/stamp");



pdfApi = new PdfApi("XXXX", "XXXXXXX")

console.log('running example');


pdfApi.getDocumentStrikeOutAnnotations("PdfWithAnnotations.pdf", null, null)
    .then((result) => {
        console.log(result.response);
    });