﻿ /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
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

import { FileIcon } from "./fileIcon";
import { MarkupAnnotation } from "./markupAnnotation";

/**
* Provides FileAttachmentAnnotation.
*/
export class FileAttachmentAnnotation extends MarkupAnnotation {
    /**
    * Gets or sets icon that shall be used in displaying annotation.
    */
    'icon': FileIcon;
    /**
    * Gets or sets icon's opacity from 0 to 1: 0 - completely transparant, 1 - completely opaque.
    */
    'opacity': number;
    /**
    * Gets or sets text associated with the file specification. 
    */
    'fileDescription': string;
    /**
    * Gets or sets file specification name. 
    */
    'fileName': string;
    /**
    * Sets content file path. 
    */
    'filePath': string;

    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "icon",
            "baseName": "Icon",
            "type": "FileIcon"
        },
        {
            "name": "opacity",
            "baseName": "Opacity",
            "type": "number"
        },
        {
            "name": "fileDescription",
            "baseName": "FileDescription",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "FileName",
            "type": "string"
        },
        {
            "name": "filePath",
            "baseName": "FilePath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileAttachmentAnnotation.attributeTypeMap);
    }
}


