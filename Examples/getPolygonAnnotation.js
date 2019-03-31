const { PdfApi } = require("asposepdfcloud");
const { PolyLineAnnotation } = require("asposepdfcloud/src/models/polyAnnotation");


pdfApi = new PdfApi(
    "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195")

console.log('running example');


const result = await pdfApi.getDocumentPolygonAnnotations(name, null, null)
const annotationId = result.body.annotations.list[0].id;
pdfApi.getPolygonAnnotation("PdfWithAnnotations.pdf", annotationId, null, null)
    .then((result) => {
        console.log(result.response);
    });