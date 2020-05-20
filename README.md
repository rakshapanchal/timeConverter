# timeConverter

# hh-mm: time converting utility
Build Status js-standard-style

⌚️ Convert seconds or miliseconds to hh:mm:ss format and vice versa.

var TimeFormat = require('timeConverter')

input = ['7:30 pm' , '6:30 PM'] // 7:30 PM  // [ '7:30 pm - 8:30 pm','6:00 pm - 7:00 pm']
TimeFormat.to24h(input)        

output = ['19:30 pm' , '18:30 PM'] // 19:30 PM  // [ '19:30 pm - 20:30 pm','18:00 pm - 19:00 pm']

# Usage
# to24h(time, format)
Convert given 12 hours time formatted string or Array to 24 hours time

# Parameters
time String representation
format (optional) Default input format. If present, it will be used to resolve amiguities during interpretation. If not specified, time is implied. See section below for supported format list
to24h(time)
Convert given 12 h time formatted string to 24 h time.


# Install
npm install timeConverter --save

# License
MIT