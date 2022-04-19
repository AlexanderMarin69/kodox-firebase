<template>
    <div :style="appGlobalStyle()">
        <br />

        <!-- top menu -->
        <div class="container-fluid" style="padding-left:95px; padding-right:50px;">
            <div class="row">
                <div class="col-md-6 col-lg-2 mb-2">
                    <router-link to="/" :style="appGlobalStyle() + 'font-size:25px;'">⬅️ Back</router-link>
                </div>
                <div class="col-md-6 col-lg-2 mb-2">
                    <button class="btn btn-primary" :style="appGlobalStyle()" @click="showEditorButtons = !showEditorButtons">Toggle Editor Buttons</button>
                </div>
            </div>
        </div>
        <!-- top menu -->

        <br />
        <!--content-->
        <div class="container-fluid" style="padding-left:95px; padding-right:50px;">
            <!--title-->
            <div class="row">
                <div class="col-md-3 col-lg-2 mb-2">
                </div>
                <div class="col-md-6 col-lg-8 mb-2">
                    <div class="input-group input-group-lg">

                        <input value="Title"
                               placeholder="Title"
                               :style="appGlobalStyle() + 'border:0px; font-size:40px;'"
                               type="text"
                               class="form-control"
                               aria-label="Large"
                               aria-describedby="inputGroup-sizing-sm">
                    </div>
                </div>
                <div class="col-md-3 col-lg-2 mb-2">
                </div>
            </div>
            <!--title end-->
            <!--description-->
            <div class="row">
                <div class="col-md-3 col-lg-2 mb-2">
                </div>
                <div class="col-md-6 col-lg-8 mb-2">
                    <div class="input-group">
                        <textarea value="Description..."
                                  placeholder="Description..."
                                  :style="appGlobalStyle() + 'border:0px; font-size:25px;'"
                                  class="form-control"
                                  aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="col-md-3 col-lg-2 mb-2">
                </div>
            </div>
            <!--description end-->
            <br />
            <div class="container">
                <div v-if="editor && showEditor">
                    <div v-if="showEditorButtons">
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                            bold
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleItalic().run()">
                            italic
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleStrike().run()">
                            strike
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleCode().run()">
                            code
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().unsetAllMarks().run()">
                            clear marks
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().clearNodes().run()">
                            clear nodes
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().setParagraph().run()">
                            paragraph
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
                            h1
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
                            h2
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
                            h3
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()">
                            h4
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()">
                            h5
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()">
                            h6
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleBulletList().run()">
                            bullet list
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleOrderedList().run()">
                            ordered list
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleCodeBlock().run()">
                            code block
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleBlockquote().run()">
                            blockquote
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().setHorizontalRule().run()">
                            horizontal rule
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().setHardBreak().run()">
                            hard break
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().undo().run()">
                            undo
                        </button>
                        <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().redo().run()">
                            redo
                        </button>
                        <!--table options-->
                        <button type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                :style="appGlobalStyle() + editorButtonStyle()"
                                class="editorButton">
                            ⚙️ Table
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="appGlobalStyle()">
                            <p class="ml-5"><b>Actions</b></p>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
                                ➕ Add Table
                            </button>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().deleteTable().run()">
                                🗑️ Delete Table
                            </button>
                            <hr />
                            <p class="ml-5"><b>Rows</b></p>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().addRowBefore().run()">
                                👆 Add Row Before
                            </button>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().addRowAfter().run()">
                                Add Row After 👇
                            </button>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().deleteRow().run()">
                                🗑️ Delete Row
                            </button>
                            <hr />
                            <p class="ml-5"><b>Columns</b></p>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().addColumnBefore().run()">
                                👈 Column Before
                            </button>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().addColumnAfter().run()">
                                Column After 👉
                            </button>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().deleteColumn().run()">
                                🗑️ Delete Column
                            </button>
                            <hr />
                            <p class="ml-5"><b>Other</b></p>
                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().mergeCells().run()">
                                Merge Cells
                            </button>

                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().splitCell().run()">
                                Split Cells
                            </button>

                            <button :style="appGlobalStyle() + editorButtonStyle() + 'font-size: 14px !important;'" class="editorButton" @click="editor.chain().focus().toggleHeaderColumn().run()">
                                Toggle Header Column
                            </button>

                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeaderRow().run()">
                                Toggle Header Row
                            </button>

                            <button :style="appGlobalStyle() + editorButtonStyle()" class="editorButton" @click="editor.chain().focus().toggleHeaderCell().run()">
                                Toggle Header Cell
                            </button>
                        </div>
                        <!--table options end-->
                </div>
                </div>
                <br />
                <editor-content :editor="editor" v-if="showEditor"/>

                <br />
                <br />

                <!--options-->
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-4 mb-2">
                        <center>
                            <div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="showEditor = !showEditor">
                                <span class="test">
                                    🖋️ Rich Text
                                </span>
                                <div class="pt-2">➕</div>
                            </div>
                        </center>
                    </div>
                    <div class="col-md-12 col-lg-4 mb-2">
                        <center>
                            <div class="option" :style="optionStyle() + 'font-size: 30px;'">
                                <code>&lt; Code Block /&gt;</code>
                                <div class="pt-2">➕</div>
                            </div>
                        </center>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-4 mb-2">
                        <center>
                            <div class="option" :style="optionStyle() + 'font-size: 30px;'">
                                <span class="test">
                                    🚩 Banner
                                </span>
                                <div class="pt-2">➕</div>
                            </div>
                        </center>
                    </div>
                    <div class="col-md-12 col-lg-4 mb-2">
                        <center>
                            <div class="option" :style="optionStyle() + 'font-size: 30px;'">
                                <span class="test">
                                    🖼️ Media
                                </span>
                                <div class="pt-2">➕</div>
                            </div>
                        </center>
                    </div>
                </div>
                <!--options end-->
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
        <!--content-->
    </div>
</template>

<script>
    import { Editor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import Document from '@tiptap/extension-document'
    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Table from '@tiptap/extension-table'
    import TableRow from '@tiptap/extension-table-row'
    import TableCell from '@tiptap/extension-table-cell'
    import TableHeader from '@tiptap/extension-table-header'
    import Gapcursor from '@tiptap/extension-gapcursor'

    import { mapActions, mapState } from "vuex";

    export default {
        name: "HomeView",
        components: {
            EditorContent,
        },
        data: function () {
            return {
                editor: null,
                showEditor: false,
                showEditorButtons: true,
            };
        },
        methods: {
            editorButtonStyle() {
                let border = "border: 2px solid " + this.style.currentMode.color + "!important; cursor: pointer;";
                return border;

            },
            optionStyle() {
                let bg = "background-color: " + this.style.currentMode.contentBg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            appGlobalStyle() {
                let bg = "background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            ...mapActions({
                setUsersPrefferedThemeOrDefault: "style/SET_PREFFERED_THEME_OR_DEFAULT",
            }),
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
      
        mounted() {
            this.setUsersPrefferedThemeOrDefault();

            this.editor = new Editor({
                content: `
<h1>HashSet&lt;T&gt; Class</h1>
<p>Reference</p>
<h4>Parameters</h4>
<div class="tableWrapper"><table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Nullable</p></th></tr><tr><td colspan="1" rowspan="1"><p>Title</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>not null</p></td></tr><tr><td colspan="1" rowspan="1"><p>Description</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>null</p></td></tr></tbody></table></div>
<h2><strong>Examples</strong></h2>
<p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>
      `,
                extensions: [
                    StarterKit,
                    Document,
                    Paragraph,
                    Text,
                    Gapcursor,
                    Table.configure({
                        resizable: true,
                    }),
                    TableRow,
                    TableHeader,
                    TableCell,
                ],
            })
        },

        beforeUnmount() {
            this.editor.destroy()
        },
    };
</script>


<style lang="scss">

   .editorButton {
      /* background: transparent;
       color: white;*/
       border-radius: 18px;
       padding-left: 12px;
       padding-right: 12px;
       padding-top: 4px;
       padding-bottom: 4px;
      /* border: 2px solid #fff;*/
       margin: 6px;
   }

    .ProseMirror {
        padding: 7px;
        table {
            border-collapse: collapse;
            table-layout: fixed;
            width: 100%;
            margin: 0;
            overflow: hidden;

            td,
            th {
                min-width: 1em;
                border: 2px solid #ced4da;
                padding: 3px 5px;
                vertical-align: top;
                box-sizing: border-box;
                position: relative;

                > * {
                    margin-bottom: 0;
                }
            }

            th {
                font-weight: bold;
                text-align: left;
            }

            .selectedCell:after {
                z-index: 2;
                position: absolute;
                content: "";
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: rgba(200, 200, 255, 0.4);
                pointer-events: none;
            }

            .column-resize-handle {
                position: absolute;
                right: -2px;
                top: 0;
                bottom: -2px;
                width: 4px;
                background-color: #adf;
                pointer-events: none;
            }

            p {
                margin: 0;
            }
        }
    }

    .tableWrapper {
        padding: 1rem 0;
        overflow-x: auto;
    }

    .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }

    .ProseMirror {
        > * + * {
            margin-top: 0.75em;
        }

        ul,
        ol {
            padding: 0 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: 1.1;
        }

        code {
            background-color: rgba(#616161, 0.1);
            color: #616161;
        }

        pre {
            background: #0D0D0D;
            color: #FFF;
            font-family: 'JetBrainsMono', monospace;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;

            code {
                color: inherit;
                padding: 0;
                background: none;
                font-size: 0.8rem;
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }

        blockquote {
            padding-left: 1rem;
            border-left: 2px solid rgba(#0D0D0D, 0.1);
        }

        hr {
            border: none;
            border-top: 2px solid rgba(#0D0D0D, 0.1);
            margin: 2rem 0;
        }
    }


    .option {
        height: 150px;
        width: 300px;
        border-radius: 18px;
        background-color: #133535;
        padding-top: 25px;
        cursor: pointer;
        transition: ease-in-out 0.5s;
        -webkit-box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
        box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
    }

    .option:hover {
        transition: ease-in-out 0.25s;
        background-color: #f44949 !important;
        color: #fff !important;
        -webkit-box-shadow: 2px 11px 17px -7px #000000;
        box-shadow: 2px 11px 17px -7px #000000;
    }
    .option:hover code {
        color: #fff;
    }
    .option:hover .test {
        color: #fff;
    }


    .form-control:focus {
        box-shadow: none;
    }

    .form-control {
        background: transparent;
    }
</style>