<template>
    <div :style="appGlobalStyle()">
        <!--content-->
        <div class="wrapper mt-5">
            <div class="container pr-5">

                <!--title-->
                <div class="row">
                <div class="col-12 ml-4">
                    <div class="input-group">
                        <input placeholder="Title"
                               v-model="article.title"
                               :style="appGlobalStyle() + 'border:0px; font-size:35px;'"
                               type="text"
                               class="form-control"
                               aria-label="Large"
                               aria-describedby="inputGroup-sizing-sm">
                    </div>
                </div>
                </div>
                <!--title end-->
                <!--description-->
                <div class="row">
                <div class="col-12 ml-4">
                    <div class="input-group">
                        <textarea placeholder="The following example demonstrates how to merge two disparate sets. This example creates two HashSet<T> objects, and populates them with even and odd numbers, respectively."
                                  v-model="article.description"
                                  rows="3"
                                  :style="appGlobalStyle() + 'border:0px; font-size:20px;'"
                                  class="form-control"
                                  aria-label="With textarea"></textarea>
                    </div>
                </div>
                </div>
                <!--description end-->

                <div class="row">
                <div class="col-12 ml-4">
                    <div v-if="allArticleItemsByOrder.length > 0" v-for="item in allArticleItemsByOrder">
                        <div v-if="item.type == 'text'">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-11" v-bind:class="{ active: showMoveButtons, 'col-12': !showMoveButtons }">
                                        <!--<CustomEditor :showEditorButtons="showEditorButtons" :editor="editors.find(x => x.id == item.id).theEditor" />-->
                                        <CustomEditor :showEditorButtons="showEditorButtons" :editor="article.texts.find(x => x.id == item.id).editor"/>
                                    </div>
                                    <div class="col-1" v-if="showMoveButtons" style="position: relative;">
                                        <br />
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary" @click="moveCodeUp(item)">👆</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveCodeUp(item)">
                                            <span class="material-symbols-outlined">
                                                expand_less
                                            </span>
                                        </button>
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary">👇</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveCodeDown(item)">
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </button>
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-danger">🗑️</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-danger">
                                            <span class="material-symbols-outlined">
                                                delete
                                            </span>
                                        </button>

                                        <!--// bottom 0-->
                                        <button style="padding-left: 26px; padding-right: 26px; position: absolute; bottom: 0; padding-bottom: 0px; border-radius: 70px !important; " class="btn btn-sm btn-outline-primary">
                                            <span class="material-symbols-outlined">
                                                add
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="item.type == 'code'">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-11" v-bind:class="{ active: showMoveButtons, 'col-12': !showMoveButtons }">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{{item.lang}}</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                                    <span class="material-symbols-outlined">
                                                        add
                                                    </span>
                                                </a>
                                            </li>
                                            <!--<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">{{item.id}}</a>
    </li>-->
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <codeBlock :code="item.code" :editId="item.id" :langTeller="item.lang" @code-changed="updateCodeBlock" />
                                            </div>
                                            <!--<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <codeBlock :code="item.code" :langTeller="item.id" />
                                            </div>-->
                                        </div>
                                    </div>
                                    <div class="col-1" v-if="showMoveButtons && item" style="position: relative;">
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary" @click="moveCodeUp(item)">👆</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveCodeUp(item)">
                                            <span class="material-symbols-outlined">
                                                expand_less
                                            </span>
                                        </button>
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary" @click="moveCodeDown">👇</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveCodeDown(item)">
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </button>
                                        <br />
                                        <br />
                                        <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-danger" @click="removeCode">🗑️</button>-->
                                        <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-danger" @click="removeCode">
                                            <span class="material-symbols-outlined">
                                                delete
                                            </span>
                                        </button>

                                        <!--// bottom 0-->
                                        <button style="padding-left: 26px; padding-right: 26px; position: absolute; bottom: 0; padding-bottom: 0px; border-radius: 70px !important;" class="btn btn-sm btn-outline-primary">
                                            <span class="material-symbols-outlined">
                                                add
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SkeletonLoader v-else></SkeletonLoader>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-12">
                            <p class="text-info">Save</p>
                            <span>
                                <kbd class="keyboard-shortcut">
                                    CTRL
                                </kbd>
                            </span>
                            <span class="ml-2 mr-2">
                                +
                            </span>
                            <span>
                                <kbd class="keyboard-shortcut">
                                    S
                                </kbd>
                            </span>
                        </div>
                    </div>
                    <!--options-->
                    <div class="row m-2">
                        <div class="col-12 col-lg-4 text-center mt-4">
                            <button class="option btn btn-outline-primary btn-block"  @click="addTextToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    format_align_left
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">Rich Text</span>
                            </button>

                            <!--<div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="addTextToArticle()">
                                <span class="test">
                                    Rich Text
                                </span>
                                <div class="pt-2">
                                    <span class="material-symbols-outlined" style="vertical-align: baseline; font-size: 50px;">
                                        format_align_left
                                    </span>
                                </div>
                            </div>-->
                        </div>
                        <div class="col-12 col-lg-4 text-center mt-4">
                            <!--<div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="addCodeBlockToArticle()">
                                <span class="test">
                                    Code Block
                                </span>
                                <div class="pt-2">
                                    <span class="material-symbols-outlined" style="vertical-align: baseline; font-size: 50px;">
                                        integration_instructions
                                    </span>
                                </div>
                            </div>-->

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    integration_instructions
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                Code Block
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-lg-4 text-center mt-4">
                            <!--<div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="addCodeBlockToArticle()">
                                <span class="test">
                                    iFrame
                                </span>
                                <div class="pt-2">
                                    <span class="material-symbols-outlined" style="vertical-align: baseline; font-size: 50px;">
                                        filter_frames
                                    </span>
                                </div>
                            </div>-->

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    filter_frames
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                iFrame
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-lg-4 text-center mt-4">
                            <!--<div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="addBannerToArticle()">
        <span class="test">
            Banner
        </span>
        <div class="pt-2">
            <span class="material-symbols-outlined" style="vertical-align: baseline; font-size: 50px;">
                info
            </span>
        </div>
    </div>-->
                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    info
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                    Banner
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-lg-4 text-center mt-4">
                            <!--<div class="option" :style="optionStyle() + 'font-size: 30px;'" @click="addMediaToArticle()">
                                <span class="test">
                                    Media
                                </span>
                                <div class="pt-2">
                                    <span class="material-symbols-outlined" style="vertical-align: baseline; font-size: 50px;">
                                        panorama
                                    </span>
                                </div>
                            </div>-->

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    panorama
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                    Media
                                </span>
                            </button>
                        </div>
                    </div>
                    <!--options end-->
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
         
            <div class="sidebar">
                <div class="container mt-3">
                    <div class="row mb-4">
                        <div class="col-12">
                            <button class="btn btn-outline-secondary btn-sm mr-4" href="#" style="vertical-align: baseline;">
                                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                                    arrow_back
                                </span>
                                Back
                            </button>
                            <button class="btn btn-outline-secondary btn-sm" href="#" style="vertical-align: baseline;" @click="zoomPageOut">
                                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                                    remove
                                </span>
                            </button>
                            <span class="p-1">{{currentZoomPercentage}}%</span>
                            <button class="btn btn-outline-secondary btn-sm" href="#" style="vertical-align: baseline;" @click="zoomPageIn">
                                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                                    add
                                </span>
                            </button>
                            <br />
                            <br />
                            <button class="btn btn-outline-success btn-block" href="#" style="vertical-align: baseline;">
                                <span class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    save
                                </span>
                                Save
                            </button>
                            <p class="text-info" style="font-size: 12px;">Saving to Netmine | Router Docs</p>
                            <button class="btn btn-outline-secondary btn-sm mb-3" href="#" style="vertical-align: baseline;" @click="showEditorButtons = !showEditorButtons">
                                <span v-if="showEditorButtons" class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility
                                </span>
                                <span v-else class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility_off
                                </span>
                                Editor Buttons
                            </button>
                            <br />
                            <button class="btn btn-outline-secondary btn-sm" href="#" style="vertical-align: baseline;" @click="showMoveButtons = !showMoveButtons">
                                <span v-if="showMoveButtons" class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility
                                </span>
                                <span v-else class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility_off
                                </span>
                                Move Buttons
                            </button>
                        </div>
                    </div>
                    <div>
                        <br />
                        <div class="row" style="margin-top: -30px;">
                            <div class="col-12">
                                <nav class="nav nav-pills nav-justified" id="test" style="overflow-x: hidden !important; height: 250px;">
                                    <div 
                                         class="nav-link disabled mr-1" 
                                         :style="appGlobalStyle() + 'cursor:pointer; margin-top: 30px;'" 
                                         :class="{ TagActive: article.tags.find(x => x === tag) }" 
                                         v-for="tag in tags" 
                                         @click="selectTag(tag)">
                                    {{tag}}
                                    </div>

                                    <!--<a class="nav-link TagActive" href="#">Docs</a>
                                    <a class="nav-link disabled" href="#">C#</a>
                                    <a class="nav-link disabled" href="#">HTML</a>
                                    <a class="nav-link disabled" href="#">CSS</a>
                                    <a class="nav-link disabled" href="#">SQL</a>
                                    <a class="nav-link disabled" href="#">Vue Js</a>
                                    <a class="nav-link TagActive" href="#">React</a>
                                    <a class="nav-link TagActive" href="#">Java</a>
                                    <a class="nav-link disabled" href="#">Azure</a>
                                    <a class="nav-link disabled" href="#">AWS</a>
                                    <a class="nav-link disabled" href="#">Kubernetes</a>
                                    <a class="nav-link TagActive" href="#">Cheat Sheet</a>-->
                                </nav>
                            </div>
                        </div>

                        <br />

                        <div class="row ml-1">
                            <h6>Create tags</h6>
                            <input 
                                   style="width: 88%;" 
                                   type="text" 
                                   class="form-control" 
                                   placeholder="Type + Enter"
                                   @click="createTag"
                                   v-model="createTagInput"
                                   />
                            <p class="text-info mt-2" style="font-size: 12px;">You can manage tags further in settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--content-->
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    import codeBlock from "@/components/mainContent/codeBlock.vue";
    import Card from "@/components/common/card.vue";
    import CustomEditor from "@/components/mainContent/customEditor.vue";
    import SkeletonLoader from "@/components/common/SkeletonLoader.vue";


    import { Editor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import Text from '@tiptap/extension-text'
    import Table from '@tiptap/extension-table'
    import TableRow from '@tiptap/extension-table-row'
    import TableCell from '@tiptap/extension-table-cell'
    import TableHeader from '@tiptap/extension-table-header'
    import TextAlign from '@tiptap/extension-text-align'
    import Document from '@tiptap/extension-document'
    import Paragraph from '@tiptap/extension-paragraph'
    //import Gapcursor from '@tiptap/extension-gapcursor'

    //alerts: [
    //    {},
    //    {}
    //],
    //author: '',

    export default {
        name: "article-view",
        components: {
            Card,
            codeBlock,
            CustomEditor,
            Editor,
            SkeletonLoader
        },
        data: function () {
            return {
                currentZoomPercentage: 100,
                createTagInput: '',
                tags:
                    [
                        'Docs',
                        'C#',
                        'HTML',
                        'CSS',
                        'SQL',
                        'Vue Js',
                        'React',
                        'Java',
                        'Azure',
                        'AWS',
                        'Kubernetes',
                        'Cheat Sheet',
                    ],
                article: {
                    title: 'HashSet<T> Class',
                    description: 'The following example demonstrates how to merge two disparate sets. This example creates two HashSet<T> objects, and populates them with even and odd numbers, respectively.',
                    codeBlocks: [
                        {
                            id: 234234234,
                            type: 'code',
                            sortOrder: 1,
                            // 0 egentligen
                            code: `
function partition(arr, start, end){
// Taking the last element as the pivot
const pivotValue = arr[end];
let pivotIndex = start;
for (let i = start; i < end; i++) {
if (arr[i] < pivotValue) {
// Swapping elements
[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
// Moving to next element
pivotIndex++;
}
}

// Putting the pivot value in the middle
[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
return pivotIndex;
}; `,
                            lang: 'C#'
                        },
                        //{
                        //    id: 7367,
                        //    type: 'code',
                        //    sortOrder: 3,
                        //    code: ``,
                        //    lang: 'JS'
                        //}
                    ],
                    texts: [
                        //                        {
                        //                            id: 888,
                        //                            type: 'text',
                        //                            sortOrder: 0,
                        //                            text: `
                        //<h4>Parameters 00000000</h4>
                        //<div class="tableWrapper"><table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Nullable</p></th></tr><tr><td colspan="1" rowspan="1"><p>Title</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>not null</p></td></tr><tr><td colspan="1" rowspan="1"><p>Description</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>null</p></td></tr></tbody></table></div>
                        //<h2><strong>Examples</strong></h2>
                        //<p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>
                        //      `,
                        //                            editor: null
                        //                        },
                        {
                            id: 909090,
                            type: 'text',
                            sortOrder: 0,
                            text: `
                        <h4>Parameters 22222222</h4>
                        <div class="tableWrapper"><table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Nullable</p></th></tr><tr><td colspan="1" rowspan="1"><p>Title</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>not null</p></td></tr><tr><td colspan="1" rowspan="1"><p>Description</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>null</p></td></tr></tbody></table></div>
                        <h2><strong>Examples</strong></h2>
                        <p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>
                              `,
                            editor: null
                        },
                    ],
                    tags:
                        [
                            'Docs', 'C#', 'AWS', 'SQL'
                        ],
                },

                showEditorButtons: false,
                showMoveButtons: true,
                codeBlockVisible: false,

                allArticleItemsByOrder: [],

                emptyText: {
                    id: 0,
                    type: 'text',
                    sortOrder: 0,
                    text: ``,
                    editor: null
                },

                emptyCodeBlock: {
                    id: 0,
                    type: 'code',
                    sortOrder: 0,
                    code: ``,
                    lang: 'C#'
                },
            };
        },
        methods: {
            zoomPageOut() {
                this.currentZoomPercentage = this.currentZoomPercentage - 10;
           
                document.body.style.zoom = this.currentZoomPercentage + '%';
            },
            zoomPageIn() {
                this.currentZoomPercentage = this.currentZoomPercentage + 10;

                document.body.style.zoom = this.currentZoomPercentage + '%';
            },
            updateCodeBlock(codeBlock) {
                console.log(codeBlock.id);
                this.article.codeBlocks.find(x => x.id === codeBlock.id).code = codeBlock.code;
            },
            // options start
            addTextToArticle() {

                const test = this.emptyText;
                var newText = test;

                newText.id = this.allArticleItemsByOrder.at(-1).id + 1;

                newText.text = `<h2><strong>Examples</strong></h2>
                        <p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>`;


                var newEditor = null;
                newEditor = new Editor({
                    content: newText.text,
                    extensions: [
                        StarterKit,
                        Document,
                        Paragraph,
                        Text,
                        TextAlign.configure({
                            types: ['heading', 'paragraph'],
                        }),
                        Table.configure({
                            resizable: true,
                        }),
                        TableHeader,
                        TableCell,
                        TableRow,
                    ],
                });

                newText.editor = newEditor;

                const sortOrderToGive = this.allArticleItemsByOrder.at(-1).sortOrder + 1;

                newText.sortOrder = sortOrderToGive;


                this.article.texts.push(newText);

                // resetting the empty text reference otherwise it saves the state for next textblock that is created
                this.emptyText = {
                    id: 0,
                    type: 'text',
                    sortOrder: 0,
                    text: ``,
                    editor: null
                };

                // this fixes save state of text when add but not for all.........
                this.allArticleItemsByOrder.push(newText);

                this.getArticleItems();

            },
            addCodeBlockToArticle() {
                const test = this.emptyCodeBlock;
                var newCodeBlock = test;

                newCodeBlock.id = this.allArticleItemsByOrder.at(-1).id + 1;
                newCodeBlock.code =
                    `
// Putting the pivot value in the middle
[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
return pivotIndex;
};
`;

                const sortOrderToGive = this.allArticleItemsByOrder.at(-1).sortOrder + 1;
                newCodeBlock.sortOrder = sortOrderToGive;

                this.article.codeBlocks.push(newCodeBlock);

                // resetting the empty text reference otherwise it saves the state for next textblock that is created
                this.emptyCodeBlock = {
                    id: 0,
                    type: 'code',
                    sortOrder: 0,
                    code: ``,
                    lang: 'C#'
                };

                this.allArticleItemsByOrder.push(newCodeBlock);

                this.getArticleItems();
            },
            addBannerToArticle() {
                console.log('add Banner');
            },
            addMediaToArticle() {
                console.log('add Media');
            },
            // options end

            createNewTag() {
                var tag = this.createTagInput;

                var found = this.tags.find(x => x === tag);
                if (found === undefined) {
                    this.tags.unshift(tag);
                    this.createTagInput = '';
                }
            },
            selectTag(tag) {
                var found = this.article.tags.find(x => x === tag);
                if (found === undefined) {
                    this.article.tags.push(tag);
                } else {
                    this.article.tags.splice(this.article.tags.indexOf(found), 1);
                }
            },

            moveCodeUp(item) {
                if (item.sortOrder === 0) {
                    return;
                }

                var currItem = null;
                var prevItem = null;

                // curr items
                if (item.type === 'code') { // if item code
                    currItem = this.article.codeBlocks.find(x => x.id === item.id);
                    this.article.codeBlocks.splice(this.article.codeBlocks.indexOf(currItem), 1);
                } else { // if item text
                    currItem = this.article.texts.find(x => x.id === item.id);
                    currItem.text = currItem.editor.getHTML();
                    this.article.texts.splice(this.article.texts.indexOf(currItem), 1);
                }


                // search in texts
                // search in codeblocks
                // return only prev item

                var prevCode = this.article.codeBlocks.find(x => x.sortOrder === (item.sortOrder - 1));
                var prevText = this.article.texts.find(x => x.sortOrder === (item.sortOrder - 1));

                if (prevCode === undefined) {
                    prevItem = prevText;
                    prevItem.text = prevItem.editor.getHTML();
                    this.article.texts.splice(this.article.texts.indexOf(prevItem), 1);
                } else {
                    prevItem = prevCode;
                    this.article.codeBlocks.splice(this.article.codeBlocks.indexOf(prevItem), 1);
                }


                if (currItem.type === 'code') {
                    currItem.sortOrder = (currItem.sortOrder - 1);
                    this.article.codeBlocks.push(currItem);
                } else {
                    currItem.sortOrder = (currItem.sortOrder - 1);
                    this.article.texts.push(currItem);
                }

                if (prevItem.type === 'text') {
                    prevItem.sortOrder = (prevItem.sortOrder + 1);
                    this.article.texts.push(prevItem);
                } else {
                    prevItem.sortOrder = (prevItem.sortOrder + 1);
                    this.article.codeBlocks.push(prevItem);
                }

                this.allArticleItemsByOrder.length = 0;

                this.getArticleItems();
            },
            moveCodeDown(item) {
                if ((item.sortOrder + 1) === this.allArticleItemsByOrder.length) {
                    return;
                }


                var currItem = null;
                var prevItem = null;

                // curr items
                if (item.type === 'code') { // if item code
                    currItem = this.article.codeBlocks.find(x => x.id === item.id);
                    this.article.codeBlocks.splice(this.article.codeBlocks.indexOf(currItem), 1);
                } else { // if item text
                    currItem = this.article.texts.find(x => x.id === item.id);
                    currItem.text = currItem.editor.getHTML();
                    this.article.texts.splice(this.article.texts.indexOf(currItem), 1);
                }


                // search in texts
                // search in codeblocks
                // return only prev item

                var prevCode = this.article.codeBlocks.find(x => x.sortOrder === (item.sortOrder + 1));
                var prevText = this.article.texts.find(x => x.sortOrder === (item.sortOrder + 1));

                if (prevCode === undefined) {
                    prevItem = prevText;
                    prevItem.text = prevItem.editor.getHTML();
                    this.article.texts.splice(this.article.texts.indexOf(prevItem), 1);
                } else {
                    prevItem = prevCode;
                    this.article.codeBlocks.splice(this.article.codeBlocks.indexOf(prevItem), 1);


                }


                if (currItem.type === 'code') {
                    currItem.sortOrder = (currItem.sortOrder + 1);
                    this.article.codeBlocks.push(currItem);
                } else {
                    currItem.sortOrder = (currItem.sortOrder + 1);
                    this.article.texts.push(currItem);
                }

                if (prevItem.type === 'text') {
                    prevItem.sortOrder = (prevItem.sortOrder - 1);
                    this.article.texts.push(prevItem);
                } else {
                    prevItem.sortOrder = (prevItem.sortOrder - 1);
                    this.article.codeBlocks.push(prevItem);
                }

                this.allArticleItemsByOrder.length = 0;
                // make chekcs if type code or text - 2 levels
                this.getArticleItems();
            },
            removeCode() {
                console.log('remove');
            },
            compareSortOrder(a, b) {
                if (a.sortOrder < b.sortOrder) {
                    return -1;
                }
                if (a.sortOrder > b.sortOrder) {
                    return 1;
                }
                return 0;
            },
            saveStateInArticle() {
                this.article.texts = [];
                this.article.codeBlocks = [];

                this.allArticleItemsByOrder;

                for (var i = 0; i < this.allArticleItemsByOrder.length; i++) {
                    if (this.allArticleItemsByOrder[i].type == 'text') {
                        this.allArticleItemsByOrder[i].text = this.allArticleItemsByOrder[i].editor.getHTML();
                        this.article.texts.push(this.allArticleItemsByOrder[i]);
                    }
                    if (this.allArticleItemsByOrder[i].type == 'code') {
                        this.article.codeBlocks.push(this.allArticleItemsByOrder[i]);
                    }
                }
            },
            getArticleItems() {
                if (this.allArticleItemsByOrder.length > 0) {
                    this.saveStateInArticle();
                }

                this.allArticleItemsByOrder = [];
                setTimeout(() => {


                    var codeBlocks = this.article.codeBlocks;
                    for (var i = 0; i < this.article.codeBlocks.length; i++) {
                        this.allArticleItemsByOrder.splice((codeBlocks[i].sortOrder), 0, codeBlocks[i]);
                    }

                    var texts = this.article.texts;
                    for (var i = 0; i < texts.length; i++) {

                        var newEditor = null;
                        newEditor = new Editor({
                            content: texts[i].text,
                            extensions: [
                                StarterKit,
                                Document,
                                Paragraph,
                                Text,
                                TextAlign.configure({
                                    types: ['heading', 'paragraph'],
                                }),
                                //Gapcursor,
                                Table.configure({
                                    resizable: true,
                                }),
                                TableRow,
                                TableHeader,
                                TableCell,
                            ],
                        });

                        // new code

                        // works but gotta find way to two way databind editor content and save it in .text with v-model or something
                        this.article.texts.find(x => x.id === texts[i].id).editor = newEditor;
                        this.allArticleItemsByOrder.splice((texts[i].sortOrder), 0, texts[i]);


                        //var newEditorObject = { id: texts[i].id, theEditor: newEditor };
                        //this.editors.push(newEditorObject);
                    }

                    this.allArticleItemsByOrder = this.allArticleItemsByOrder.sort(this.compareSortOrder);
                }
                    , 0);
            },
            optionStyle() {
                let bg = "background-color: " + this.style.currentMode.contentBg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
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
            this._keyListener = function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    if (this.createTagInput !== '') {
                        this.createNewTag();
                    }
                }
            };

            document.addEventListener("keydown", this._keyListener.bind(this));

            this.setUsersPrefferedThemeOrDefault();
            this.getArticleItems();

            //            this.editor = new Editor({
            //                content: `
            //<h4>Parameters</h4>
            //<div class="tableWrapper"><table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Nullable</p></th></tr><tr><td colspan="1" rowspan="1"><p>Title</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>not null</p></td></tr><tr><td colspan="1" rowspan="1"><p>Description</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>null</p></td></tr></tbody></table></div>
            //<h2><strong>Examples</strong></h2>
            //<p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>
            //      `,
            //                extensions: [
            //                    StarterKit,
            //                    Document,
            //                    Paragraph,
            //                    Text,
            //                    Gapcursor,
            //                    Table.configure({
            //                        resizable: true,
            //                    }),
            //                    TableRow,
            //                    TableHeader,
            //                    TableCell,
            //                ],
            //            })
        },
        beforeUnmount() {
            //this.editor.destroy()
            // foreach editors destroy but not really needed i think
        },
    };
</script>

<style lang="scss" scoped>
    .keyboard-shortcut { /* Background and color */
        background-color: transparent;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.7); /* Bottom shadow */
        box-shadow: rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px; /* Spacing */
        padding: 8px;
    }

    .TagActive {
        background-color: rgba(108, 117, 125, 0.4) !important;
    }

    .TagActive:hover {
        background-color: rgba(220, 53, 69, 0.4) !important;
        border: 1px solid rgba(220, 53, 69, 0.4) !important;
    }

    .disabled {
        border: 1px solid transparent;
        border-radius: 10px;
    }

    .disabled:hover {
        border: 1px solid rgba(108, 117, 125, 0.4);
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
    }

    .main,
    .sidebar {
    }

    .main {
        width: 100%;
        height: 150vh;
    }

    .sidebar {
        width: 25%;
        height: 25vh;
    }

    .sidebar {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
    // sidebar end

    .option {
        height: 150px;
        width: 300px;
        border-radius: 18px;
        font-size: 32px;
        /*background-color: #133535;*/
      /*  padding-top: 25px;
        cursor: pointer;
        transition: ease-in-out 0.3s;
        -webkit-box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
        box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);*/
    }

   /* .option:hover {
        transition: ease-in-out 0.25s;
        background-color: #007bff !important;
        color: #fff !important;
        -webkit-box-shadow: 2px 11px 17px -7px #000000;
        box-shadow: 2px 11px 17px -7px #000000;
    }*/

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