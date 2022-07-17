// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import android from './android'
import biology from './biology'
import chemistry from './chemistry'
import dsa from './dsa'
import home from './home'
import jee from './jee'
import math from './math'
import neet from './neet'
import physics from './physics'
import web from './webdev'
import engineering from './engineering'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([android,chemistry,biology,dsa,home,jee,math,neet,physics,web,engineering
    /* Your types here! */
  ]),
})