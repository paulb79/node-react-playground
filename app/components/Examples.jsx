var React = require('react')
var {Link} = require('react-router')

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few examples</p>
            <ul>
                <li>
                    <Link to='/?location="London'>London, UK</Link>
                </li>
                <li>
                    <Link to='/?location="Port Louis'>Port Louis, MRU</Link>
                </li>
            </ul>
        </div>
    )
}

module.exports = Examples;