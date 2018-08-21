 /**
 *
 *   Copyright (c) 2018 Aspose.Pdf for Cloud
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import * as BaseTest from "./baseTestPdfApi";
import "mocha";
import { HttpStatusCode } from "../src/models/httpStatusCode";
import { Paragraph } from "../src/models/paragraph";
import { TextHorizontalAlignment } from "../src/models/textHorizontalAlignment";
import { LineSpacing } from "../src/models/lineSpacing";
import { VerticalAlignment } from "../src/models/verticalAlignment";
import { WrapMode } from "../src/models/wrapMode";
import { FontStyles } from "../src/models/fontStyles";
var assert = require('assert');

describe("Paragraphs Tests", () => {

    const name = "4pages.pdf";
    
    beforeEach( async () => {
        await BaseTest.uploadFile(name);
    });

    describe("PutAddText Test", () => {
        
        it("should return response with code 200", () => {

            const paragraph = new Paragraph();
            paragraph.rectangle = { x: 100, y: 100, width: 200, height: 200};
            paragraph.leftMargin = 10;
            paragraph.rightMargin = 10;
            paragraph.topMargin = 20;
            paragraph.bottomMargin = 20;
            paragraph.horizontalAlignment = TextHorizontalAlignment.FullJustify;
            paragraph.lineSpacing = LineSpacing.FontSize;
            paragraph.rotation = 10;
            paragraph.subsequentLinesIndent = 20;
            paragraph.verticalAlignment = VerticalAlignment.Center;
            paragraph.wrapMode = WrapMode.ByWords;

            paragraph.lines = [
                {
                    horizontalAlignment: TextHorizontalAlignment.Right,
                    segments: [
                        {
                            value: "segment 1",
                            textState: {
                                font: "Arial",
                                fontSize: 10,
                                foregroundColor: { a: 0x00, r: 0x00, g: 0xFF, b: 0x00 },
                                backgroundColor: { a: 0x00, r: 0xFF, g: 0x00, b: 0x00},
                                fontStyle: FontStyles.Bold
                            }
                        }
                    ]
                }
            ];

            const pageNumber = 3;

            return BaseTest.getPdfApi().putAddText(name, pageNumber, paragraph, BaseTest.remoteTempFolder)
                .then((result) => {
                    assert.equal(result.response.statusCode, HttpStatusCode.OK);
            });
        });
    });
});