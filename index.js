//* Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//* Create an array of questions for user input


const languageArray = ["HTML", "CSS", "JavaScript", "Nodejs", "jQuery", "Bootstrap", "Angular", "VueJS", "Java", "Python", "GitHub"]
function promptUser() {

    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "projectLink",
            message: "Please add the link to your deployed application (use https://)"
        },

        {
            type: "input",
            name: "Contribution",
            message: "How can people contribute to this project?"
        },

        {
            type: "input",
            name: "projectInfo",
            message: "Brief Description of the project?"
        },

        {
            type: "input",
            name: "executeCode",
            message: "What command is required to execute your application? ex: npm install inquirer"
        },

        {
            type: "input",
            name: "userName",
            message: "Please enter the name(s) of the participant(s) of this project"
        },

        {
            message: "Please enter your email",
            name: "email",
            type: "input",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },

        {
            name: "languageUsed",
            type: "checkbox",
            message: "Select the technologies used on the project:",
            choices: languageArray,
        },

        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "image",
            message: "Please enter the URL of your deployed(jpeg,png or gif)"
        },


        {
            type: "input",
            name: "linkedIn",
            message: "Enter your LinkedIn URL."
        },

        {
            type: "list",
            name: "license",
            message: "Please select the type of license for this project",
            choices: ["MIT", "Apache 2.0"],
        },
    ]);
}

//* Answers to ReadMe

function generateReadMe(answers) {

        if (answers.license == "MIT") {
            answers.license = `<details>
            <summary>
                <a>Show License</a>
            </summary>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </details>`

        } else if (answers.license == "Apache 2.0") {
            answers.license = `<details>
            <summary>
                <a>Show License</a>
            </summary>
Apache License

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
<details><summary>
1. Definitions
</summary>

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document"

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

</details>


<details><summary> 
2. Grant of Copyright License. 
</summary>

    Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

</details>



<details><summary> 
3. Grant of Patent License.
</summary>

    Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s)with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.
</details>

<details><summary> 
4. Redistribution. 
</summary>

    You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.
</details>



<details><summary> 
5. Submission of Contributions. 
</summary>


    Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.
</details>

<details><summary> 
6. Trademarks 
</summary>

    This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.
</details>

<details><summary> 
7. Disclaimer of Warranty.
</summary>

    Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.
</details>

<details><summary> 
8. Limitation of Liability.
</summary>

    In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.
</details>

<details><summary> 
9. Accepting Warranty or Additional Liability. 
</summary>

    While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.
</details>


<br> **END OF TERMS AND CONDITIONS**

Copyright 2021 Wildnei Queiroz

    </details>`
        } else {
            answers.license = "none"
        };

    return `

## Table of Contents

* [Description](#description)
* [Link to Deployed Application](#Link-to-deployed-application)
* [How to Execute Application](#How-to-execute-application)
* [Example](#example)
* [Contact Information](#Contact-information)

# Project

${answers.projectName}

## Description

${answers.projectInfo}

## Link to deployed application

Navigate to [Deployed Application](${answers.projectLink})

## How to execute application

\`\`\` ${ answers.executeCode } \`\`\`

## Example


![Image](${answers.image})

## Project Owner

${answers.userName}

## Contact Information

For more information please contact: ${answers.email}

## Github Profile

For more projects please check my [GitHub](https://github.com/${answers.github}) profile

## Technologies used

${answers.languageUsed}

## How to contribute to the project

${answers.contribution}

## LinkedIn Profile

[LinkedIn Profile](${answers.linkedIn})

## License

${answers.license}



    `

}

//* ReadMe Generator

promptUser()
    .then(function (answers) {
        const readme = generateReadMe(answers);
        return writeFileAsync("README.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to readme.MD");
    })
    .catch(function (err) {
        console.log(err);
    });

