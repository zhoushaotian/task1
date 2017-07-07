var mock = require('mockjs');
var handlebars = require('handlebars');
var { graphql, buildSchema } = require('graphql');
var shareData = mock.mock({
    'story|1-1': [{
            title: 'Jawbone is being liquidated as its CEO launches a related health startup ',
            by: 'janober',
            source: 'techcrunch.com',
            id: 1
        },
        {
            title: 'Mental health is still an issue in the workplace',
            by: 'bcx',
            source: 'medium.com',
            id: 2
        },
        {
            title: 'Roomba Inventor Joe Jones on His New Weed-Killing Robot',
            by: 'sohkamyung',
            source: 'ieee.org',
            id: 3
        },
        {
            title: 'Idiomatic Redux: The Tao of Redux, Part 1',
            by: 'myth_drannon',
            source: 'isquaredsoftware.com',
            id: 4
        },
        {
            title: 'Google VR Blocks: A Free 3D Modeling Tool for HTC Vive and Oculus Rift',
            by: 'antichaos',
            source: 'vr.google.com',
            id: 5
        },
        {
            title: 'An ‘Uber for garbage’ picks up steam, and $11.7M in Series A funding',
            by: 'janober',
            source: 'techcrunch.com',
            id: 6
        },
        {
            title: 'Hackers Are Targeting Nuclear Facilities, Homeland Security Dept. And F.B.I. Say',
            by: 'danijelb',
            source: 'nytimes.com',
            id: 7
        },
        {
            title: 'Show HN: An online interactive Kubernetes playground',
            by: 'xetorthio',
            source: 'play-with-k8s.com',
            id: 8
        },
        {
            title: 'Analog Computers',
            by: ' StreamBright',
            source: 'degruyter.com',
            id: 9
        },
        {
            title: 'Pillow-SIMD – Fast, production-ready image resize for x86',
            by: 'igordebatur',
            source: 'uploadcare.com',
            id: 10
        },
        {
            title: 'I make $10k per month with the Amazon Affiliate Program',
            by: 'danso',
            source: 'reddit.com',
            id: 11
        },
        {
            title: 'Privileged Ports Are Expensive (2016)',
            by: 'phaer',
            source: 'adamierymenko.com',
            id: 12
        },
        {
            title: 'Manage Kubernetes Clusters on AWS Using Kops',
            by: 'betahost',
            source: 'amazon.com',
            id: 13
        },
        {
            title: 'The Human Settlements',
            by: 'fern',
            source: 'humansettlements.com',
            id: 14
        }
    ],
});
console.log(shareData);
var schemaStory = buildSchema(`
    type Query{
        title: [String],
        source: [String],
    },

`);
var rootStory = {
    title: () => {
        var arr = [];
        shareData.story.forEach(function(e) {
            arr.push(e.title);
        });
        return arr;
    },
    source: () => {
        var arr = [];
        shareData.story.forEach(function(e) {
            arr.push(e.source);
        });
        return arr;
    }
};
graphql(schemaStory, '{title,source}', rootStory).then(function(res) {
    console.log("schema1:", res);
    //拿到数据 开始渲染页面
    var source = document.getElementById('entry-template').innerHTML;
    var template = handlebars.compile(source);
    var content = {
        item: res.data.source
    }

});