import * as React from "react";
import { storiesOf } from "@storybook/react";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
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
      language: 'ja',
      // imageUploadURL:
      // imageUploadParams: {
      //   // railsに送るparams
      // },
      videoInsertButtons: ['videoBack', '|', 'videoByURL'],
      events: {
        'froalaEditor.blur': () => {
          // self.handleSave()
          console.log('blur!');
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
