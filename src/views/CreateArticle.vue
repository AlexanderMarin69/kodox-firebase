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
                                        <div class="col-11">
                                            <!--<CustomEditor :showEditorButtons="showEditorButtons" :editor="editors.find(x => x.id == item.id).theEditor" />-->
                                            <CustomEditor :showEditorButtons="showEditorButtons" :editor="item.editor" :editId="item.id" @editor-changed="updateText" />
                                        </div>
                                        <div class="col-1" v-if="showMoveButtons" style="position: relative;">
                                            <br />
                                            <br />
                                            <br />
                                            <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary" @click="moveCodeUp(item)">👆</button>-->
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveArticleSectionUp(item)">
                                                <span class="material-symbols-outlined">
                                                    expand_less
                                                </span>
                                            </button>
                                            <br />
                                            <br />
                                            <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary">👇</button>-->
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveArticleSectionDown(item)">
                                                <span class="material-symbols-outlined">
                                                    expand_more
                                                </span>
                                            </button>
                                            <br />
                                            <br />
                                            <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-danger">🗑️</button>-->
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-danger" @click="removeArticleSection(item)">
                                                <span class="material-symbols-outlined">
                                                    delete
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
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveArticleSectionUp(item)">
                                                <span class="material-symbols-outlined">
                                                    expand_less
                                                </span>
                                            </button>
                                            <br />
                                            <br />
                                            <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-primary" @click="moveCodeDown">👇</button>-->
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-primary" @click="moveArticleSectionDown(item)">
                                                <span class="material-symbols-outlined">
                                                    expand_more
                                                </span>
                                            </button>
                                            <br />
                                            <br />
                                            <!--<button style="padding-left: 26px; padding-right: 26px;" class="btn btn-sm btn-outline-danger" @click="removeCode">🗑️</button>-->
                                            <button style="padding-left: 26px; padding-right: 26px; padding-bottom: 0px;" class="btn btn-sm btn-outline-danger" @click="removeArticleSection(item)">
                                                <span class="material-symbols-outlined">
                                                    delete
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
                    <!--options-->
                    <div class="row m-2">
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 mt-4">

                            <button class="option btn btn-outline-primary btn-block" @click="addTextToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    format_align_left
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">Rich Text</span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 mt-4">

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    integration_instructions
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                    Code Block
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 mt-4">

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    filter_frames
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                    iframe
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 mt-4">

                            <button class="option btn btn-outline-primary btn-block" @click="addCodeBlockToArticle()">
                                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 32px;">
                                    info
                                </span>
                                <span class="ml-3" style="vertical-align: baseline;">
                                    Banner
                                </span>
                            </button>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 mt-4">
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
                    <div class="row">
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
                            <button class="btn btn-outline-success btn-block" href="#" style="vertical-align: baseline;" @click="saveArticle()">
                                <span class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    save
                                </span>
                                Save
                            </button>
                            <button class="btn btn-outline-primary btn-block" href="#" style="vertical-align: baseline;" @click="getArticle()">
                                <span class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    download
                                </span>
                                Get test
                            </button>
                            <p class="text-info mt-1" style="font-size: 12px;">Saving to Netmine | Router Docs</p>

                            <button class="btn btn-outline-secondary btn-sm mr-3" href="#" style="vertical-align: baseline;" @click="showEditorButtons = !showEditorButtons">
                                <span v-if="showEditorButtons" class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility
                                </span>
                                <span v-else class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility_off
                                </span>
                                Editor
                            </button>
                            <button class="btn btn-outline-secondary btn-sm" href="#" style="vertical-align: baseline;" @click="showMoveButtons = !showMoveButtons">
                                <span v-if="showMoveButtons" class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility
                                </span>
                                <span v-else class="material-symbols-outlined mr-1" style="vertical-align: bottom;">
                                    visibility_off
                                </span>
                                Move
                            </button>
                        </div>
                    </div>
                        <div class="row">
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
                            <p class="text-info mt-1" style="font-size: 12px;">You can manage tags further in settings.</p>
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

    import articleService from "@/services/articleService";

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
                        //                        {
                        //                            id: 234234234,
                        //                            type: 'code',
                        //                            sortOrder: 1,
                        //                            code: `
                        //function partition(arr, start, end){
                        //// Taking the last element as the pivot
                        //const pivotValue = arr[end];
                        //let pivotIndex = start;
                        //for (let i = start; i < end; i++) {
                        //if (arr[i] < pivotValue) {
                        //// Swapping elements
                        //[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                        //// Moving to next element
                        //pivotIndex++;
                        //}
                        //}

                        //// Putting the pivot value in the middle
                        //[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
                        //return pivotIndex;
                        //}; `,
                        //                            lang: 'C#'
                        //                        },
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
                        //{
                        //    id: 909090,
                        //    type: 'text',
                        //    sortOrder: 0,
                        //    text: `
                        //<h4>Parameters 22222222</h4>
                        //<div class="tableWrapper"><table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Type</p></th><th colspan="1" rowspan="1"><p>Nullable</p></th></tr><tr><td colspan="1" rowspan="1"><p>Title</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>not null</p></td></tr><tr><td colspan="1" rowspan="1"><p>Description</p></td><td colspan="1" rowspan="1"><p>string</p></td><td colspan="1" rowspan="1"><p>null</p></td></tr></tbody></table></div>
                        //<h2><strong>Examples</strong></h2>
                        //<p>The following example demonstrates how to merge two disparate sets. This example creates two HashSet&lt;T&gt; objects, and populates them with even and odd numbers, respectively. A third HashSet&lt;T&gt; object is created from the set that contains the even numbers. The example then calls the UnionWith method, which adds the odd number set to the third set.</p>
                        //      `,
                        //    editor: null
                        //},
                    ],
                    tags:
                        [
                            'Docs', 'C#', 'AWS', 'SQL'
                        ],
                },

                showEditorButtons: false,
                showMoveButtons: true,

                allArticleItemsByOrder: [],

                emptyArticleSection: {
                    id: 0,
                    type: '',
                    sortOrder: 0,
                    text: ``,
                    editor: null,
                    code: ``,
                    lang: ''
                },
            };
        },
        methods: {
            async getArticle() {
                await articleService.getTest()
                    .then((result) => {

                        console.log(result);

                        this.article = result;

                        // settings editor bcz editor is null in db
                        for (var i = 0; i < this.article.texts.length; i++) {
                            var newEditor = null;
                            newEditor = new Editor({
                                content: this.article.texts[i].text,
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

                            this.article.texts[i].editor = newEditor;
                        }

                        this.setUpArticleItemsListForView();
                    });
            },
            saveArticle() {
                for (var i = 0; i < this.article.texts.length; i++) {
                    this.article.texts[i].editor = null;
                }
                articleService.test(this.article);
            },
            // move to zoomer component -------------------------
            zoomPageOut() {
                this.currentZoomPercentage = this.currentZoomPercentage - 10;

                document.body.style.zoom = this.currentZoomPercentage + '%';
            },
            zoomPageIn() {
                this.currentZoomPercentage = this.currentZoomPercentage + 10;

                document.body.style.zoom = this.currentZoomPercentage + '%';
            },
            // move to zoomer component -------------------------

            // section update data ------------------
            updateCodeBlock(codeBlock) {
                this.article.codeBlocks.find(x => x.id === codeBlock.id).code = codeBlock.code;
            },
            updateText(editorId) {
                setTimeout(() => {
                    const theTextToUpdateWith = this.article.texts.find(x => x.id === editorId).editor.getHTML();
                    this.article.texts.find(x => x.id === editorId).text = theTextToUpdateWith;
                }, 0);

            },
            // section update data ------------------

            // add sections to article ------------
            addTextToArticle() {
                var newText = {
                    id: 0,
                    type: 'text',
                    sortOrder: 0,
                    text: ``,
                    editor: null,
                };

                if (this.allArticleItemsByOrder.length > 0) {
                    newText.id = this.allArticleItemsByOrder.at(-1).id + 1;
                } else {
                    newText.id = 1;
                }

                newText.text =
                    `<h2><strong>Examples</strong></h2>
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

                newText.sortOrder = 0;
                if (this.allArticleItemsByOrder.length > 0) {
                    newText.sortOrder = this.allArticleItemsByOrder.at(-1).sortOrder + 1;
                }

                this.article.texts.push(newText);

                this.setUpArticleItemsListForView();
            },
            addCodeBlockToArticle() {
                var newCodeBlock = {
                    id: 0,
                    type: 'code',
                    sortOrder: 0,
                    code: ``,
                    lang: 'JS'
                };


                if (this.allArticleItemsByOrder.length > 0) {
                    newCodeBlock.id = this.allArticleItemsByOrder.at(-1).id + 1;
                } else {
                    newCodeBlock.id = 1;
                }


                newCodeBlock.code =
                    `
// Putting the pivot value in the middle
[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
return pivotIndex;
};
`;


                newCodeBlock.sortOrder = 0;
                if (this.allArticleItemsByOrder.length > 0) {
                    newCodeBlock.sortOrder = this.allArticleItemsByOrder.at(-1).sortOrder + 1;
                }

                this.article.codeBlocks.push(newCodeBlock);

                this.setUpArticleItemsListForView();
            },
            addBannerToArticle() {
                console.log('not yet implemnted');
            },
            addMediaToArticle() {
                // vueDropzone
                console.log('not yet implemnted');
            },
            // add sections to article ------------

            // tags methods --------------
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
            // tags methods --------------

            // move article sections -----------------------
            moveArticleSectionUp(item) {
                if (item.sortOrder === 0) {
                    return;
                }

                setTimeout(() => {
                    var currItem = this.allArticleItemsByOrder.find(x => x.id === item.id);
                    var prevItem = this.allArticleItemsByOrder.at((this.allArticleItemsByOrder.indexOf(currItem) - 1));


                    if (currItem.type === 'code') {
                        this.article.codeBlocks.find(x => x.id === currItem.id).sortOrder = this.article.codeBlocks.find(x => x.id === currItem.id).sortOrder - 1;
                    }
                    if (currItem.type === 'text') {
                        this.article.texts.find(x => x.id === currItem.id).sortOrder = this.article.texts.find(x => x.id === currItem.id).sortOrder - 1;
                    }

                    if (prevItem.type === 'code') {
                        this.article.codeBlocks.find(x => x.id === prevItem.id).sortOrder = this.article.codeBlocks.find(x => x.id === prevItem.id).sortOrder + 1;
                    }
                    if (prevItem.type === 'text') {
                        this.article.texts.find(x => x.id === prevItem.id).sortOrder = this.article.texts.find(x => x.id === prevItem.id).sortOrder + 1;
                    }

                    this.setUpArticleItemsListForView();
                }, 0);
            },
            moveArticleSectionDown(item) {
                if ((item.sortOrder) === this.allArticleItemsByOrder.length) {
                    return;
                }

                setTimeout(() => {
                    var currItem = this.allArticleItemsByOrder.find(x => x.id === item.id);
                    var prevItem = this.allArticleItemsByOrder.at(this.allArticleItemsByOrder.indexOf(currItem) + 1);

                    if (currItem.type === 'code') {
                        this.article.codeBlocks.find(x => x.id === currItem.id).sortOrder = this.article.codeBlocks.find(x => x.id === currItem.id).sortOrder + 1;
                    }
                    if (currItem.type === 'text') {
                        this.article.texts.find(x => x.id === currItem.id).sortOrder = this.article.texts.find(x => x.id === currItem.id).sortOrder + 1;
                    }

                    if (prevItem.type === 'code') {
                        this.article.codeBlocks.find(x => x.id === prevItem.id).sortOrder = this.article.codeBlocks.find(x => x.id === prevItem.id).sortOrder - 1;
                    }
                    if (prevItem.type === 'text') {
                        this.article.texts.find(x => x.id === prevItem.id).sortOrder = this.article.texts.find(x => x.id === prevItem.id).sortOrder - 1;
                    }

                    this.setUpArticleItemsListForView();

                }, 0);
            },
            removeArticleSection(item) {
                setTimeout(() => {
                    var itemIsTypeText = this.article.texts.find(x => x.id === item.id);
                    var itemIsTypeCode = this.article.codeBlocks.find(x => x.id === item.id);

                    if (itemIsTypeText !== undefined) {
                        const textIndex = this.article.texts.indexOf(itemIsTypeText);
                        if (textIndex > -1) {
                            this.article.texts.splice(textIndex, 1);
                        }
                    }
                    if (itemIsTypeCode !== undefined) {
                        const codeIndex = this.article.codeBlocks.indexOf(itemIsTypeCode);
                        if (codeIndex > -1) {
                            this.article.codeBlocks.splice(codeIndex, 1);
                        }
                    }

                    this.setUpArticleItemsListForView();
                }, 0);
            },
            // move article sections -----------------------


            // ---------------------
            compareSortOrder(a, b) {
                if (a.sortOrder < b.sortOrder) {
                    return -1;
                }
                if (a.sortOrder > b.sortOrder) {
                    return 1;
                }
                return 0;
            },
            setUpArticleItemsListForView() {
                setTimeout(() => {
                    setTimeout(() => {
                        this.allArticleItemsByOrder = [];
                    }, 0);

                    setTimeout(() => {
                        for (var lal = 0; lal < this.article.codeBlocks.length; lal++) {
                            //this.allArticleItemsByOrder.splice((this.article.codeBlocks[lal].sortOrder), 0, this.article.codeBlocks[lal]);
                            this.allArticleItemsByOrder.push(this.article.codeBlocks[lal]);
                        }
                    }, 0);

                    // if this is before codeBlocks then wrong visual update when moving 2 texts close to eachoter
                    // still happens if they at the bottom tho......
                    setTimeout(() => {
                        for (var lel = 0; lel < this.article.texts.length; lel++) {
                            // push
                            this.allArticleItemsByOrder.push(this.article.texts[lel]);
                            //this.allArticleItemsByOrder.splice((this.article.texts[lel].sortOrder), 0, this.article.texts[lel]);
                        }
                    }, 0);


                    setTimeout(() => {
                        this.allArticleItemsByOrder = this.allArticleItemsByOrder.sort(this.compareSortOrder);
                    }, 0);

                }, 0);
            },
            // ---------------------

            // style ------------ style --------------
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
            // style ------------ style --------------
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
            this.setUpArticleItemsListForView();
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