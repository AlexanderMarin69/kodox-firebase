<template>
    <div v-if="editor">
        <div v-if="showEditorButtons">
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setTextAlign('left').run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_align_left
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setTextAlign('center').run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_align_center
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setTextAlign('right').run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_align_right
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().unsetTextAlign().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    cancel
                </span>
                alignment
            </button>


            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().undo().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    undo
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().redo().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    redo
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_bold
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleItalic().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_italic
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleStrike().run()">
                <strike>strike</strike>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleCodeBlock().run()">
                <code>code</code>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().unsetAllMarks().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    mop
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setParagraph().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    local_parking
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleBulletList().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    list
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleOrderedList().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    format_list_numbered
                </span>
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setHorizontalRule().run()">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    horizontal_rule
                </span>
            </button>
            <!--<button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().setHardBreak().run()">
        break
    </button>-->
            <!--table options-->
            <!--table options end-->
        </div>

        <div v-if="showEditorButtons && editor">
            <div class="btn-group"> 
            <button type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="btn btn-outline-primary editorButton">
                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                    view_module
                </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="appGlobalStyle()">
                <p class="ml-5"><b>Actions</b></p>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
                    ➕ Add Table
                </button>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().deleteTable().run()">
                    🗑️ Delete Table
                </button>
                <hr />
                <p class="ml-5"><b>Rows</b></p>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().addRowBefore().run()">
                    👆 Add Row Before
                </button>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().addRowAfter().run()">
                    Add Row After 👇
                </button>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().deleteRow().run()">
                    🗑️ Delete Row
                </button>
                <hr />
                <p class="ml-5"><b>Columns</b></p>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().addColumnBefore().run()">
                    👈 Column Before
                </button>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().addColumnAfter().run()">
                    Column After 👉
                </button>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().deleteColumn().run()">
                    🗑️ Delete Column
                </button>
                <hr />
                <p class="ml-5"><b>Other</b></p>
                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().mergeCells().run()">
                    Merge Cells
                </button>

                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().splitCell().run()">
                    Split Cells
                </button>

                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeaderColumn().run()">
                    Toggle Header Column
                </button>

                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeaderRow().run()">
                    Toggle Header Row
                </button>

                <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeaderCell().run()">
                    Toggle Header Cell
                </button>
            </div>
            </div>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
                header 1
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
                header 2
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
                header 3
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()">
                header 4
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()">
                header 5
            </button>
            <button class="btn btn-outline-primary editorButton" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()">
                header 6
            </button>

        </div>

        <editor-content :editor="editor" :id="'editor-id-' + editId"/>
    </div>
</template>

 
<script>
    import { EditorContent } from '@tiptap/vue-3'
    

    import { mapState } from "vuex";

    export default {
        name: "editor",
        components: {
            EditorContent
        },
        props: ["editor", "editId", "showEditorButtons"],
        data: function () {
            return {
            };
        },
        methods: {
            editorButtonStyle() {
                let border = "border: 2px solid " + this.style.currentMode.color + "!important; cursor: pointer;";
                return border;
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
        mounted() {
            const editor = document.getElementById("editor-id-" + this.editId);
            editor.addEventListener('input', (event) => {
                this.$emit("editorChanged", this.editId);
            });
        },
    };
</script>

<style lang="scss">
    .editorButton {
        /* background: transparent;
       color: white;*/
        /*border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom-righ-radius: 6px;
        border-bottom-left-radius: 6px;*/

        /*border-radius: 18px;*/
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 6px;
        padding-bottom: 6px;
        /* border: 2px solid #fff;*/
        /*margin: 6px;*/
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
</style>