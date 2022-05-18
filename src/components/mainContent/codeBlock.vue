<template>
    <!-- for dynamic styles -->
    <!-- <div :style="leLol()"> -->
    <div>
        <span class="text-secondary"><u>common/components/index.js</u></span>
        <span style="float: right">
            <a href="https://www.codepen.io/aasdfADFHqea32bSF">https://www.codepen.io/aasdfADFHqea32bSF</a>
        </span>

        <div class="container">
            <div class="row">
                <div class="col-3">
                    <span class="text-secondary"
                          style="font-size: 28px;">{{langTeller}}</span>
                </div>
                <div class="col-7"></div>
                <div class="col-2 text-right">
                    <span class="copyButtonStyle"
                          style="z-index: 10; font-size: 30px; cursor: pointer; padding-left: 5px; padding-right: 5px;">
                        <span class="material-symbols-outlined">
                            content_copy
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <pre class="preStyle">
        <!--<code class="codeStyle" contenteditable="true" id="editableCodeBlock">-->
        <code class="codeStyle" id="editableCodeBlock" contenteditable="true"><span>{{code}}</span></code>
        </pre>
        <div style="margin-top:-50px;">
            <span class="text-secondary">Authors: Alexander Marin</span>
            <br />
            <span class="text-secondary">Credits: Emil Johansson</span>
        </div>
    </div>
</template>

<style>
    .copyButtonStyle:hover {
        background-color: #007bff;
        color: #fff;
        border-radius: 10px;
    }
    /* remove scoped then paste in the css manually */

    /* for .hlsj -> make script that gets element by id, removes all style, then adds new style */
    /*
    pre code.hljs {
      display: block;
      overflow-x: auto;
      padding: 1em;
    }
    code.hljs {
      padding: 3px 5px;
    }
    .hljs {
      color: #cbd6e2;
      background: #0b1c2c;
    }
    .hljs ::selection,
    .hljs::selection {
      background-color: #405c79;
      color: #cbd6e2;
    }
    .hljs-comment {
      color: #627e99;
    }
    .hljs-tag {
      color: #aabcce;
    }
    .hljs-operator,
    .hljs-punctuation,
    .hljs-subst {
      color: #cbd6e2;
    }
    .hljs-operator {
      opacity: 0.7;
    }
    .hljs-bullet,
    .hljs-deletion,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-template-variable,
    .hljs-variable {
      color: #bf8b56;
    }
    .hljs-attr,
    .hljs-link,
    .hljs-literal,
    .hljs-number,
    .hljs-symbol,
    .hljs-variable.constant_ {
      color: #bfbf56;
    }
    .hljs-class .hljs-title,
    .hljs-title,
    .hljs-title.class_ {
      color: #8bbf56;
    }
    .hljs-strong {
      font-weight: 700;
      color: #8bbf56;
    }
    .hljs-addition,
    .hljs-code,
    .hljs-string,
    .hljs-title.class_.inherited__ {
      color: #56bf8b;
    }
    .hljs-built_in,
    .hljs-doctag,
    .hljs-keyword.hljs-atrule,
    .hljs-quote,
    .hljs-regexp {
      color: #568bbf;
    }
    .hljs-attribute,
    .hljs-function .hljs-title,
    .hljs-section,
    .hljs-title.function_,
    .ruby .hljs-property {
      color: #8b56bf;
    }
    .diff .hljs-meta,
    .hljs-keyword,
    .hljs-template-tag,
    .hljs-type {
      color: #bf568b;
    }
    .hljs-emphasis {
      color: #bf568b;
      font-style: italic;
    }
    .hljs-meta,
    .hljs-meta .hljs-keyword,
    .hljs-meta .hljs-string {
      color: #bf5656;
    }
    .hljs-meta .hljs-keyword,
    .hljs-meta-keyword {
      font-weight: 700;
    } */

    .codeStyle {
        text-align: start !important;
        font-size: 16px;
        margin-top: -60px;
    }

    .hljs {
        /* content bg is good */
        /* it was transparent but doesnt work in light mode */
        /* background-color: #313234; */
        background-color: #212223;
    }

    .preStyle {
        border-radius: 10px !important;
    }

    .codeStyle {
        border-radius: 10px !important;
    }

    .langTeller {
        position: relative;
        width: 60px;
        height: 60px;
        bottom: -75px;
        right: 110px;
        color: grey;
        text-align: center;
        font-size: 18px;
    }
</style>
<script>
    import highlighter from "highlight.js";

    export default {
        name: "codeBlock",
        props: ["code", "langTeller", "editId"],
        methods: {
            doTheHighlightning(el) {
                highlighter.highlightElement(el);
            },
        },
        data: function () {
            return {
                // sheet: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/night-owl.min.css'
            };
        },
        mounted() {
            const self = this;
            highlighter.highlightAll();

            // highlights on blur <code>
            const editableCodeBlock = document.getElementById("editableCodeBlock");
            editableCodeBlock.addEventListener('blur', (event) => {

                var contenteditable = document.getElementById("editableCodeBlock");
                var text = contenteditable.textContent;

                this.$emit("codeChanged", { code: text, id: this.editId });

                setTimeout(() => {
                    self.doTheHighlightning(editableCodeBlock);
                }, 0);
            });

            // so that user can press enter
            this._keyListener = function (e) {
                if (e.keyCode === 13) {
                    document.execCommand('insertHTML', false, '<br/>');
                    return false;
                }
            };

            document.getElementById("editableCodeBlock").addEventListener("keydown", this._keyListener.bind(this));
        },
    };
</script>