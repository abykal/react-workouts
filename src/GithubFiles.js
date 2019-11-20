import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class GithubFiles extends Component {
    
    render() {
        console.log(this.props)

        return (
            <>
                <h1 className="display-4 mt-4">GitHub Repo Files</h1>
                <div>
                    <FileList files={this.props.files}/>
                </div>
            </>
        )
    }
}


// File List Container

const FileList = (props) => (
    <table className="file-list">
        <tbody>
            {props.files.map(file => (
                <tr className="file-list-item" key={file.id}>
                    <td className="file-name">{file.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

FileList.propTypes = {
    files: PropTypes.array
}



// File List Item

const FileListItem = ({ file }) => (
    <tr className="file-list-item" key={file.id}>
        <td className="file-name">{file.name}</td>
    </tr>
)

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}