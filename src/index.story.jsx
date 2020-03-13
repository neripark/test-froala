import * as React from "react";
import { storiesOf } from "@storybook/react";
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/themes/dark.min.css';
// import 'font-awesome/css/font-awesome.css';
import FroalaEditor from "react-froala-wysiwyg";



storiesOf("froala-index", module)
  .add("default", () => {

    const [description, setDescription] = React.useState('<p>init text.</p>');

    const onModelChange = edittedDescription => {
      setDescription(edittedDescription)
    }

    const logger = () => {
      console.log(description);
    }
    const config = {
      placeholderText: '編集する',
      charCounterCount: false,
      theme: 'dark',
      zindex: 0,
      // toolbarButtons: ['bold', 'underline'],
      // toolbarButtons: {
      //   paragraphFormat: {
      //     N: 'テキストFormat',
      //     H1: 'Heading 1',
      //     H2: 'Heading 2',
      //     H3: 'Heading 3',
      //     H4: 'Heading 4',
      //     PRE: 'Code'
      //   },
      // 'moreText': {
      //   'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      // },
      // 'moreParagraph': {
      //   'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      // },
      // 'moreRich': {
      //   'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      // },
      // 'moreMisc': {
      //   'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
      //   'align': 'right',
      //   'buttonsVisible': 2
      // }
      // },
      toolbarButtons: [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        '|',
        'paragraphFormat',
        'align',
        'undo',
        'redo',
        '|',
        'html',
        '|',
        'formatOL',
        'formatUL',
      ],
      paragraphFormat: {
        N: 'テキストFormat',
        H3: 'Heading 3',
        PRE: 'Code'
      },
      language: 'ja',
      // imageUploadURL:
      // imageUploadParams: {
      //   // railsに送るparams
      // },
      videoInsertButtons: ['videoBack', '|', 'videoByURL'],
      events: {
        'blur': () => {
          // self.handleSave()
          console.log('blur!');
        },
        'paste.beforeCleanup': function (clipboard_html) {
          console.log(clipboard_html);
          // return clipboard_html + ' !!!!!!' 
          // iframe.lyを叩いたてい
          // return '<div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;\"><iframe src=\"https://www.youtube.com/embed/duH9tmcaMvk?rel=0\" style=\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\" allowfullscreen scrolling=\"no\" allow=\"encrypted-media; accelerometer; gyroscope; picture-in-picture\"></iframe></div> ';
        }
      }
    };

    return (
      <div>
        <h1>Froala Editor!</h1>
        <FroalaEditor
          model={description}
          config={config}
          onModelChange={onModelChange}
        />
        <button
          onClick={logger}
        >現在の状態</button>
      </div>
    )
  });
