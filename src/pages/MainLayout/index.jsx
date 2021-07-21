import React, { useState } from 'react'
import MUIEditor, { MUIEditorState } from 'react-mui-draft-wysiwyg'

export const Editor = () => {
	const config = {
		editor: {
			style: {
				border: '1px solid #6d6285',
				backgroundColor: '#f1f1e9',
				height: '70vh',
			},
		},
	}
	const [editorState, setEditorState] = useState(MUIEditorState.createEmpty())
	const onChange = (newState) => {
		setEditorState(newState)
	}
	return (
		<div style={{ width: '72%', margin: '0 auto', padding: '30px 0' }}>
			<MUIEditor
				editorState={editorState}
				onChange={onChange}
				config={config}
			/>
		</div>
	)
}
