var ROSDASH = new Object();
ROSDASH.version = "1.0";
ROSDASH.user = "test4";
ROSDASH.view_type;
ROSDASH.default_style = cytoscape.stylesheet()
	.selector('node')
	.css({
		'shape': 'data(faveShape)',
		'width': 'mapData(weight, 10, 30, 20, 60)',
		'height': 'mapData(height, 0, 100, 10, 45)',
		'content': 'data(name)',
		'font-size': 25,
		'text-valign': 'center',
		'text-outline-width': 2,
		'text-outline-color': 'data(faveColor)',
		'background-color': 'data(faveColor)',
		'color': '#fff'
	})
	.selector(':selected')
	.css({
		'border-width': 3,
		'border-color': '#333'
	})
	.selector('edge')
	.css({
		'width': 'mapData(strength, 70, 100, 2, 6)',
		'line-color': 'data(faveColor)',
		'source-arrow-color': 'data(faveColor)',
		'target-arrow-color': 'data(faveColor)'
	});
ROSDASH.default_element = {
	nodes: [
		{ data: { id: 'j', name: 'Jerry', weight: 65, faveColor: '#6FB1FC', faveShape: 'triangle' } },
		{ data: { id: 'e', name: 'Elaine', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } },
		{ data: { id: 'k', name: 'Kramer', weight: 75, faveColor: '#86B342', faveShape: 'octagon' } },
		{ data: { id: 'g', name: 'George', weight: 70, faveColor: '#F5A45D', faveShape: 'rectangle' } }
	],
	edges: [
		{ data: { source: 'j', target: 'e', faveColor: '#6FB1FC', strength: 90 } },
		{ data: { source: 'j', target: 'k', faveColor: '#6FB1FC', strength: 70 } },
		{ data: { source: 'j', target: 'g', faveColor: '#6FB1FC', strength: 80 } },
		{ data: { source: 'e', target: 'j', faveColor: '#EDA1ED', strength: 95 } },
		{ data: { source: 'e', target: 'k', faveColor: '#EDA1ED', strength: 60 }, classes: 'questionable' },
		{ data: { source: 'k', target: 'j', faveColor: '#86B342', strength: 100 } },
		{ data: { source: 'k', target: 'e', faveColor: '#86B342', strength: 100 } },
		{ data: { source: 'k', target: 'g', faveColor: '#86B342', strength: 100 } },
		{ data: { source: 'g', target: 'j', faveColor: '#F5A45D', strength: 90 } }
	]
};
ROSDASH.default_element1 = [
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge

      data: { // element data (put dev data here)
          id: 'n1', // mandatory for each element, assigned automatically on undefined
          parent: 'nparent', // indicates the compound node parent id; not defined => no parent
      },

      position: { // the model position of the node (optional on init, mandatory after)
          x: 100,
          y: 100
      },

      selected: false, // whether the element is selected (default false)

      selectable: true, // whether the selection state is mutable (default true)

      locked: false, // when locked a node's position is immutable (default false)

      grabbable: true, // whether the node can be grabbed and moved by the user

      classes: 'foo bar' // a space separated list of class names that the element has
    },
    { // node n2
      group: 'nodes',
      data: { id: 'n2' },
      renderedPosition: { x: 200, y: 200 } // can alternatively specify position in rendered on-screen pixels
    },
    { // node n3
      group: 'nodes',
      data: { id: 'n3', parent: 'nparent' },
      position: { x: 123, y: 234 }
    },
    { // node nparent
      group: 'nodes',
      data: { id: 'nparent' }
    },
    { // edge e1
      group: 'edges',
      data: {
          id: 'e1',
          source: 'n1', // the source node id (edge comes from this node)
          target: 'n2'  // the target node id (edge goes to this node)
      }
    }
  ];
ROSDASH.default_element2 = {
	"nodes": [
		{
			"data": {
				"id": "alltopics",
				"name": "all topics",
				"weight": 70,
				"faveColor": "green",
				"faveShape": "rectangle"
			},
			"classes": "body alltopics alltopics0",
			"position": {
				"x": 0,
				"y": 0
			},
			"locked": "true"
		}, {
			"data": {
				"id": "alltopics_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output alltopics alltopics0",
			"position": {
				"x": 80,
				"y": 0
			},
			"locked": "true",
			"grabbable": "true"
		}, {
			"data": {
				"id": "text00",
				"name": "text00",
				"weight": 70,
				"faveColor": "blue",
				"faveShape": "rectangle"
			},
			"classes": "body text text0",
			"position": {
				"x": 1000,
				"y": 0
			},
			"locked": "true"
		}, {
			"data": {
				"id": "text00_i00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "input text text0",
			"position": {
				"x": 920,
				"y": 0
			},
			"locked": "true"
		}, {
			"data": {
				"id": "text00_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output text text0",
			"position": {
				"x": 1080,
				"y": 0
			},
			"locked": "true"
		}, {
			"data": {
				"id": "text01",
				"name": "text01",
				"weight": 70,
				"faveColor": "blue",
				"faveShape": "rectangle"
			},
			"classes": "body text text1",
			"position": {
				"x": 1000,
				"y": 200
			},
			"locked": "true"
		}, {
			"data": {
				"id": "text01_i00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "input text text1",
			"position": {
				"x": 920,
				"y": 200
			},
			"locked": "true"
		}, {
			"data": {
				"id": "text01_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output text text1",
			"position": {
				"x": 1080,
				"y": 200
			},
			"locked": "true"
		}, {
			"data": {
				"id": "/status",
				"name": "/status",
				"weight": 70,
				"faveColor": "green",
				"faveShape": "rectangle"
			},
			"classes": "body topic topic0",
			"position": {
				"x": 0,
				"y": 200
			},
			"locked": "true"
		}, {
			"data": {
				"id": "/status_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output topic topic0",
			"position": {
				"x": 80,
				"y": 200
			},
			"locked": "true"
		}, {
			"data": {
				"id": "/speech",
				"name": "/speech",
				"weight": 70,
				"faveColor": "green",
				"faveShape": "rectangle"
			},
			"classes": "body topic topic1",
			"position": {
				"x": 0,
				"y": 100
			},
			"locked": "true"
		}, {
			"data": {
				"id": "/speech_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output topic topic1",
			"position": {
				"x": 80,
				"y": 100
			},
			"locked": "true"
		}, {
			"data": {
				"id": "table00",
				"name": "table00",
				"weight": 70,
				"faveColor": "blue",
				"faveShape": "rectangle"
			},
			"classes": "body table table0",
			"position": {
				"x": 1000,
				"y": 400
			},
			"locked": "true"
		}, {
			"data": {
				"id": "table00_i00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "input table table0",
			"position": {
				"x": 920,
				"y": 360
			},
			"locked": "true"
		}, {
			"data": {
				"id": "table00_i01",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "input table table0",
			"position": {
				"x": 920,
				"y": 400
			},
			"locked": "true"
		}, {
			"data": {
				"id": "table00_i02",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "input table table0",
			"position": {
				"x": 920,
				"y": 440
			},
			"locked": "true"
		}, {
			"data": {
				"id": "table00_o00",
				"name": "",
				"weight": 5,
				"faveColor": "grey",
				"faveShape": "ellipse"
			},
			"classes": "output table table0",
			"position": {
				"x": 1080,
				"y": 400
			},
			"locked": "true"
		}
	],
	"edges": [
		{
			"data": {
				"source": "/speech_o00",
				"target": "text00_i00",
				"faveColor": "grey",
				"strength": 10
			}
		}, {
			"data": {
				"source": "/status_o00",
				"target": "text01_i00",
				"faveColor": "grey",
				"strength": 10
			}
		}
	]
};

//------------------- basics
// dialog form
$(function() {
	// for diagram
	if ($("#cy").length > 0)
	{
		$( "#dialog-form" ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			position: {my: "0 0", at: "0 800", of: null},
			height: 700,
			width: 300,
			modal: true,
			buttons: {
				"OK": function() {
					ROSDASH.saveProperty(this);
					$( this ).dialog( "close" );
					ROSDASH.property_open = false;
				},
				Cancel: function() {
					$( this ).dialog( "close" );
					ROSDASH.property_open = false;
				}
			},
			close: function() {
				if ($("#cy").length > 0)
				{
					$( "#cy" ).offset({left:0});
					$("#cy").width($("#cy").width() + 310);
				}
				$( [] ).val( "" ).removeClass( "ui-state-error" );
				ROSDASH.property_open = false;
			}
		});
	} else 	//for panel
	{
		$( "#dialog-form" ).dialog({
			autoOpen: false,
			draggable: true,
			resizable: true,
			height: 300,
			width: 300,
			modal: true,
			buttons: {
				"OK": function() {
					ROSDASH.saveProperty(this);
					$( this ).dialog( "close" );
					ROSDASH.property_open = false;
				},
				Cancel: function() {
					$( this ).dialog( "close" );
					ROSDASH.property_open = false;
				}
			},
			close: function() {
				$( [] ).val( "" ).removeClass( "ui-state-error" );
				ROSDASH.property_open = false;
			}
		});
	}
});
ROSDASH.property_open = false;
// show property dialog when button is clicked
ROSDASH.showProperty = function ()
{
	// leave margin for dialog
	if ($("#cy").length > 0)
	{
		$("#cy").offset({left: 310});
		$("#cy").width($("#cy").width() - 310);
	}
	if (! ROSDASH.property_open)
	{
		$( "#dialog-form" ).dialog( "open" );
		ROSDASH.property_open = true;
	} else
	{
		$( "#dialog-form" ).dialog( "close" );
		ROSDASH.property_open = false;
	}
}
// save property to block when close
ROSDASH.saveProperty = function (dialog)
{
	$(dialog).find("input").each(function (i, ele)
	{
		ROSDASH.blocks[ROSDASH.selected_block][$(ele).attr("name")] = $(ele).val();
	});
}

//------------------- user
ROSDASH.checkUserConfValid = function ()
{
	if (ROSDASH.user_conf.run_msec < 100)
	{
		console.error("run_msec is too low: ", ROSDASH.user_conf.run_msec);
		ROSDASH.user_conf.run_msec = 100;
	}
}
ROSDASH.setUser = function (user)
{
	if (undefined === user || "" == user)
	{
		console.error("invalid user: " + user);
		ROSDASH.user = "test";
	} else
	{
		ROSDASH.user = user;
	}
	ROSDASH.checkUserConfValid();
	console.log("user name: " + ROSDASH.user);
}
ROSDASH.user_conf = {
	disable_selection: true,
	run_msec: 200,
	widget_width: 400,
	widget_height: 230,
	header_height: 16,
	content_height: 180
};

//------------------- ROS
ROSDASH.ros;
ROSDASH.ros_connected = false;
ROSDASH.connectROS = function (host, port)
{
	host = (typeof host !== "undefined") ? host : "localhost";
	port = (typeof port !== "undefined") ? port : "9090";
	ROSDASH.ros = new ROSLIB.Ros();
	ROSDASH.ros.on('error', function(error) {
		console.error("ROS connection error: ", error);
		ROSDASH.ros_connected = false;
	});
	ROSDASH.ros.on('connection', function() {
		ROSDASH.ros_connected = true;
		console.log('ROS connection made: ' + host + ":" + port);
		ROSDASH.getROSNames(ROSDASH.ros);
	});
	ROSDASH.ros.connect('ws://' + host + ':' + port);
}
ROSDASH.topics;
ROSDASH.services;
ROSDASH.params;
// get existing ROS names from ROSLIB
ROSDASH.getROSNames = function (ros)
{
	ROSDASH.topics = new Array();
	ROSDASH.services = new Array();
	ROSDASH.params = new Array();
	ROSDASH.ros.getTopics(function (topics)
	{
		ROSDASH.topics = topics;
		console.log('ros topics: ', topics);
	});
	ROSDASH.ros.getServices(function (services)
	{
		ROSDASH.services = services;
		console.log('ros services: ', services);
	});
	ROSDASH.ros.getParams(function (params)
	{
		ROSDASH.params = params;
		console.log('ros params: ', params);
	});
}
// check if name is existing ROS name
ROSDASH.checkROSValid = function (name, type)
{
	type = (typeof type !== "undefined") ? type : "topic";
	var array;
	switch (type)
	{
	case "service":
		array = ROSDASH.services;
		break;
	case "param":
		array = ROSDASH.params;
		break;
	default:
		array = ROSDASH.topics;
		break;
	}
	return (jQuery.inArray(name, array) != -1);
}
// ROS blocks in the diagram
ROSDASH.ros_blocks = {
	topic: new Array(),
	service: new Array(),
	param: new Array()
};
// if conflict with existing ROS blocks
ROSDASH.checkROSConflict = function (name, type)
{
	type = (typeof type !== "undefined" || ! (type in ROSDASH.ros_blocks)) ? type : "topic";
	return (-1 != jQuery.inArray(name, ROSDASH.ros_blocks[type]));
}

//------------------- msg def
ROSDASH.msg_json = {
	"std_msgs": new Object()
};
ROSDASH.msg_def = new Object();
ROSDASH.getMsgDef = function (name)
{
	for (var i in ROSDASH.msg_json)
	{
		var json = ROSDASH.msg_json[i];
		for (var j in json)
		{
			var json2 = json[j];
			if (undefined === json2.name)
			{
				for (var k in json2)
				{
					if (json2[k].name == name)
					{
						return json2[k];
					}
				}
			} else
			{
				if (json2.name == name)
				{
					return json2;
				}
			}
		}
	}
	return undefined;
}
ROSDASH.checkMsgTypeValid = function (name)
{
	return (undefined !== ROSDASH.getMsgDef(name));
}

//------------------- widget def
ROSDASH.widget_json = {
	"widgets": new Object()
};
ROSDASH.widget_def = new Object();
// init msg and widget definition from json
//@todo add json file name from user configuration
ROSDASH.initJson = function ()
{
	for (var i in ROSDASH.msg_json)
	{
		$.getJSON("param/" + i + ".json", function(data, status, xhr)
		{
			for (var j in data)
			{
				ROSDASH.msg_json[j] = data;
				for (var k in data[j])
				{
					if (undefined != data[j][k].name)
					{
						$("#msg-list").append('<li><a href="">' + data[j][k].name + '</a></li>');
					}
				}
				-- ROSDASH.panel_init_count;
			}
		});
	}
	for (var i in ROSDASH.widget_json)
	{
		$.getJSON("param/" + i + ".json", function(data, status, xhr)
		{
			for (var j in data)
			{
				ROSDASH.widget_json[j] = data;
				for (var k in data[j])
				{
					if (undefined != data[j][k].type)
					{
						ROSDASH.widget_def[data[j][k].type] = data[j][k];
						$("#widget-list").append('<li><a href="">' + data[j][k].type + '</a></li>');
					}
				}
				-- ROSDASH.panel_init_count;
			}
		});
	}
}
ROSDASH.checkWidgetTypeValid = function (name)
{
	return (name in ROSDASH.widget_def);
}

//------------------- blocks
// default settings for blocks
ROSDASH.BLOCK_SIZE = [200, 70];
ROSDASH.PIN_SIZE = [5, 5];
ROSDASH.BLOCK_SHAPE = "rectangle";
ROSDASH.BLOCK_COLOR = "blue";
ROSDASH.PIN_COLOR = "grey";
ROSDASH.NEW_POS = [400, 0];
ROSDASH.INPUT_POS = {
	"1": [[-70, 0]],
	"2": [[-70, -20], [-70, 20]],
	"3": [[-70, -20], [-70, 0], [-70, 20]],
	"4": [[-70, -30], [-70, -10], [-70, 10], [-70, 30]],
	"5": [[-70, -40], [-70, -20], [-70, 0], [-70, 20], [-70, 40]],
	// more is coming
};
ROSDASH.OUTPUT_POS = {
	"1": [[70, 0]],
	"2": [[70, -20], [70, 20]],
	"3": [[70, -20], [70, 0], [70, 20]],
	"4": [[70, -30], [70, -10], [70, 10], [70, 30]],
	"5": [[70, -40], [70, -20], [70, 0], [70, 20], [70, 40]],
	// more is coming
};
// generate the position for new blocks to be
//@todo
ROSDASH.getNextNewBlockPos = function ()
{
	return ROSDASH.NEW_POS;
}
//@deprecated
ROSDASH.addTopicByName = function (name)
{
	ROSDASH.addTopic({rosname: name});
}
ROSDASH.addTopic = function (def)
{
	if ("" == def.rosname || ROSDASH.checkROSConflict(def.rosname, "topic"))
	{
		console.error("topic name not valid: " + def.rosname);
		return;
	}
	var next_pos = ROSDASH.getNextNewBlockPos();
	var x = (typeof def.x !== "undefined") ? parseFloat(def.x) : next_pos[0];
	var y = (typeof def.y !== "undefined") ? parseFloat(def.y) : next_pos[1];
	var count = ROSDASH.ros_blocks.topic.length;
	var id = "topic-" + count;
	window.cy.add({
		group: "nodes",
		data: {
			id: id,
			name: def.rosname,
			height: ROSDASH.BLOCK_SIZE[0],
			weight: ROSDASH.BLOCK_SIZE[1],
			faveColor: "green",
			faveShape: ROSDASH.BLOCK_SHAPE
		},
		position: { x: x, y: y },
		classes: "body"
	});
	window.cy.add({
		group: "nodes",
		data: {
			id: id + "-o0",
			height: ROSDASH.PIN_SIZE[0],
			weight: ROSDASH.PIN_SIZE[1],
			faveColor: ROSDASH.PIN_COLOR,
			faveShape: ROSDASH.BLOCK_SHAPE
		},
		position: { x: x + ROSDASH.OUTPUT_POS[1][0][0], y: y + ROSDASH.OUTPUT_POS[1][0][1] },
		classes: "output",
		locked: true
	});
	var block = {
		id: id,
		type: "topic",
		rosname: def.rosname,
		number: ROSDASH.ros_blocks.topic.length,
		x: x,
		y: y
	};
	ROSDASH.blocks[id] = block;
	ROSDASH.ros_blocks.topic.push(name);
}
ROSDASH.blocks = new Object();
ROSDASH.addBlockByType = function (type)
{
	var block = new Object();
	// if constant, change the type
	if (ROSDASH.checkMsgTypeValid(type))
	{
		block = {
			type: "constant",
			constant: true,
			constname: type,
			value: ""
		};
	} else
	{
		block = {
			type: type,
		};
	}
	ROSDASH.addBlock(block);
}
ROSDASH.addBlock = function (def)
{
	var block = new Object();
	var block_type;
	if ("constant" == def.type || ROSDASH.checkMsgTypeValid(def.type))
	{
		block = def;
		block.type = "constant";
		block.constant = true;
		block.input_num = 0;
		block.output_num = 1;
		// constant should change the block_type into constname for ROSDASH.widget_def
		block_type = block.constname;
	} else if (ROSDASH.checkWidgetTypeValid(def.type))
	{
		block = def;
		block.input_num = ROSDASH.widget_def[def.type].input.length;
		block.output_num = ROSDASH.widget_def[def.type].output.length;
		block_type = def.type;
	} else
	{
		// the widget type is invalid, and the error message is sent from ROSDASH.checkWidgetTypeValid
		return;
	}
	// if no position specified, use the position for a new block
	var next_pos = ROSDASH.getNextNewBlockPos();
	block.x = (typeof def.x != "undefined") ? parseFloat(def.x) : next_pos[0];
	block.y = (typeof def.y != "undefined") ? parseFloat(def.y) : next_pos[1];
	// if no block number specified
	if (undefined === def.number)
	{
		// if no count, initialize to zero
		if (undefined === ROSDASH.widget_def[block_type])
		{
			ROSDASH.widget_def[block_type] = new Object();
			ROSDASH.widget_def[block_type].count = 0;
		} else if (undefined === ROSDASH.widget_def[block_type].count)
		{
			ROSDASH.widget_def[block_type].count = 0;
		}
		++ ROSDASH.widget_def[block_type].count;
		def.number = ROSDASH.widget_def[block_type].count;
		def.id = block_type + "-" +  ROSDASH.widget_def[block_type].count;
		def.name = block_type + " " +  ROSDASH.widget_def[block_type].count;
	}
	// if no widget_def, initialize to def.number
	else if (undefined === ROSDASH.widget_def[block_type])
	{
		ROSDASH.widget_def[block_type] = new Object();
		ROSDASH.widget_def[block_type].count = def.number;
	}	// if no count, initialize to def.number
	else if (undefined === ROSDASH.widget_def[block_type].count)
	{
		ROSDASH.widget_def[block_type].count = 0;
	}	// if larger than count, set count to def.number
	else if (def.number > ROSDASH.widget_def[block_type].count)
	{
		ROSDASH.widget_def[block_type].count = def.number;
	} else	// otherwise, ignore the count
	{
		// test if conflict with other block number
		for (var i in ROSDASH.blocks)
		{
			if (block_type == ROSDASH.blocks[i].type && def.number == ROSDASH.blocks[i].number)
			{
				console.error("block number conflicts: " + def.id);
				return;
			}
		}
	}
	// add the body of the block
	window.cy.add({
		group: "nodes",
		data: {
			id: block.id,
			name: block.name,
			height: ROSDASH.BLOCK_SIZE[0],
			weight: ROSDASH.BLOCK_SIZE[1],
			faveColor: ROSDASH.BLOCK_COLOR,
			faveShape: ROSDASH.BLOCK_SHAPE
		},
		position: { x: block.x, y: block.y },
		classes: "body"
	});
	// add input pins
	for (var i = 0; i < block.input_num; ++ i)
	{
		window.cy.add({
			group: "nodes",
			data: {
				id: block.id + "-i" + i,
				height: ROSDASH.PIN_SIZE[0],
				weight: ROSDASH.PIN_SIZE[1],
				faveColor: ROSDASH.PIN_COLOR,
				faveShape: ROSDASH.BLOCK_SHAPE
			},
			position: { x: block.x + ROSDASH.INPUT_POS[block.input_num][i][0], y: block.y + ROSDASH.INPUT_POS[block.input_num][i][1] },
			classes: "input",
			locked: true
		});
	}
	// add output pins
	for (var i = 0; i < block.output_num; ++ i)
	{
		window.cy.add({
			group: "nodes",
			data: {
				id: block.id + "-o" + i,
				height: ROSDASH.PIN_SIZE[0],
				weight: ROSDASH.PIN_SIZE[1],
				faveColor: ROSDASH.PIN_COLOR,
				faveShape: ROSDASH.BLOCK_SHAPE
			},
			position: { x: block.x + ROSDASH.OUTPUT_POS[block.output_num][i][0], y: block.y + ROSDASH.OUTPUT_POS[block.output_num][i][1] },
			classes: "output",
			locked: true
		});
	}
	// save the information of the block into ROSDASH.blocks based on id
	ROSDASH.blocks[block.id] = block;
}

//------------------- block actions
ROSDASH.selected_block;
// update the property dialog box
ROSDASH.selectBlockCallback = function ()
{
	// update when selected
	window.cy.on('select', function(evt)
	{
		var html = "";
		// select node
		if (evt.cyTarget.isNode())
		{
			var id = evt.cyTarget.id();
			// select pin
			if (undefined === evt.cyTarget.hasClass("body") || false == evt.cyTarget.hasClass("body"))
			{
				var hyphen = id.lastIndexOf("-");
				var id2 = id.substring(0, hyphen);
				var block = ROSDASH.blocks[id2];
				var widget = ROSDASH.widget_def[block.type];
				if (undefined !== block.type)
				{
					html += "<p>type: " + block.type + "</p>";
				}
				if (undefined !== block.id)
				{
					ROSDASH.selected_block = block.id;
					html += '<p>id: ' + block.id + "</p>";
				}
				var pin_num = parseFloat(id.substring(hyphen + 2));
				if (evt.cyTarget.hasClass("input"))
				{
					html += "<p>input: " + widget.input[pin_num].name + " (" + widget.input[pin_num].datatype + ")</p>";
				} else if (evt.cyTarget.hasClass("output"))
				{
					html += "<p>output: " + widget.output[pin_num].name + " (" + widget.output[pin_num].datatype + ")</p>";
				}
			} else // select body
			{
				var block = ROSDASH.blocks[id];
				var widget = ROSDASH.widget_def[block.type];
				if (undefined !== block.type)
				{
					html += "<p>type: " + block.type + "</p>";
				}
				if (undefined !== block.id)
				{
					ROSDASH.selected_block = block.id;
					html += '<p>id: ' + block.id + "</p>";
				}
				if (undefined !== widget.input)
				{
					html += "<p>input: " + widget.input.length + "</p>";
					if (widget.input.length > 0)
					{
						html += "<ul>";
						for (var i in widget.input)
						{
							html += "<li>" + widget.input[i].name + " (" + widget.input[i].datatype + ")</li>";
						}
						html += "</ul>";
					}
				}
				if (undefined !== widget.output)
				{
					html += "<p>output: " + widget.output.length + "</p>";
					if (widget.output.length > 0)
					{
						html += "<ul>";
						for (var i in widget.output)
						{
							html += "<li>" + widget.output[i].name + " (" + widget.output[i].datatype + ")</li>";
						}
						html += "</ul>";
					}
				}
				if ("topic" == block.type)
				{
					html += "<p>topic: " + block.rosname + "</p>";
				}
				if (block.constant)
				{
					html += 'value: <input type="text" name="value" value="' + block.value + '" class="text ui-widget-content ui-corner-all" />';
				}
			}
		} else		// select edge
		{
			ROSDASH.selected_block = undefined;
			html = '<p>type: edge</p>'
					+ '<p>source: ' + evt.cyTarget.source().id() + '</p>'
					+ '<p>target: ' + evt.cyTarget.target().id() + '</p>';
		}
		$("#dialog-form").find("#property").html(html);
	});
}
ROSDASH.removeBlock = function (name)
{
	var ele = window.cy.$(':selected');
	var id;
	var type;
	// priority on selected elements
	if (ele.size() > 0 )
	{
		id = ele.id();
		if (ele.id() in ROSDASH.blocks)
		{
			type = ROSDASH.blocks[ele.id()].type;
			delete ROSDASH.blocks[ele.id()];
		}
		ele.remove();
	}	// then the argument block
	else if (undefined != name && "" != name)
	{
		id = name;
		// first check id
		ele = cy.nodes('[id = "' + name + '"]');
		if (0 == ele.size())
		{
			// then check name
			ele = cy.nodes('[name = "' + name + '"]');
			id = ele.id();
		}
		if (0 < ele.size())
		{
			if (id in ROSDASH.blocks)
			{
				type = ROSDASH.blocks[id].type;
				delete ROSDASH.blocks[id];
			}
			ele.remove();
		}
	}
	if (undefined === ROSDASH.widget_def[type])
	{
		return;
	}
	// remove pins
	for (var i = 0; i < ROSDASH.widget_def[type].input.length; ++ i)
	{
		ROSDASH.removeBlock(id + "-i" + i);
	}
	for (var i = 0; i < ROSDASH.widget_def[type].output.length; ++ i)
	{
		ROSDASH.removeBlock(id + "-o" + i);
	}
}
// let pins follow body when move
ROSDASH.followBlock = function (target)
{
	var id = target.id();
	if (undefined === ROSDASH.blocks[id])
	{
		// target does not exist
		return;
	}
	// update the information in ROSDASH.blocks
	ROSDASH.blocks[id].x = target.position('x');
	ROSDASH.blocks[id].y = target.position('y');
	var type = ROSDASH.blocks[id].type;
	// update input pins
	var pin_num = ROSDASH.widget_def[type].input.length;
	for (var i = 0; i < pin_num; ++ i)
	{
		window.cy.nodes('[id = "' + id + "-i" + i + '"]').positions(function (j, ele)
		{
			ele.position({
				x: target.position('x') + ROSDASH.INPUT_POS[pin_num][i][0],
				y: target.position('y') + ROSDASH.INPUT_POS[pin_num][i][1]
			});
		});
	}
	// update output pins
	pin_num = ROSDASH.widget_def[type].output.length;
	for (var i = 0; i < pin_num; ++ i)
	{
		window.cy.nodes('[id = "' + id + "-o" + i + '"]').positions(function (j, ele)
		{
			ele.position({
				x: target.position('x') + ROSDASH.OUTPUT_POS[pin_num][i][0],
				y: target.position('y') + ROSDASH.OUTPUT_POS[pin_num][i][1]
			});
		});
	}
}
ROSDASH.blockMoveCallback = function ()
{
	// let pins follow the body when move
	window.cy.on('position', function(evt)
	{
		ROSDASH.followBlock(evt.cyTarget);
	});
	//@deprecated
	window.cy.on('free', function(evt)
	{
		//ROSDASH.saveDiagram();
	});
}
ROSDASH.connect_former = new Object();
// connect two pins
ROSDASH.connectBlocks = function (source, target)
{
	// if source and target do not exist
	var body = source.substring(0, source.lastIndexOf("-"));
	if (! (body in ROSDASH.blocks))
	{
		console.error("cannot connect: " + source);
		return;
	}
	body = target.substring(0, target.lastIndexOf("-"));
	if (! (body in ROSDASH.blocks))
	{
		console.error("cannot connect: " + target);
		return;
	}
	// if target has duplicate connection
	window.cy.edges().each(function (i, ele)
	{
		if (ele.source().id() == target || ele.target().id() == target)
		{
			console.error("duplicate connect: " + target);
			return;
		}
	});
	window.cy.add({
		group: "edges",
		"data": {
		"source": source,
		"target": target,
		"faveColor": "grey",
		"strength": 10
		}
	});
}
ROSDASH.connectBlocksCallback = function ()
{
	window.cy.on('select', function(evt)
	{
		// mark the connect type
		var connect_type = 0;
		if (evt.cyTarget.hasClass("output"))
		{
			connect_type = 1;
		} else if (evt.cyTarget.hasClass("input"))
		{
			connect_type = 2;
		} else
		{
			return;
		}
		// if no former or unselected the former for a while
		if (undefined === ROSDASH.connect_former.block || new Date().getTime() - ROSDASH.connect_former.unselect > 300)
		{
			ROSDASH.connect_former.block = evt.cyTarget;
			ROSDASH.connect_former.type = connect_type;
		}	// can be connected if connect types are different
		else if (undefined != ROSDASH.connect_former.block && connect_type != ROSDASH.connect_former.type)
		{
			if (1 == connect_type)
			{
				ROSDASH.connectBlocks(evt.cyTarget.id(), ROSDASH.connect_former.block.id());
			} else if (2 == connect_type)
			{
				ROSDASH.connectBlocks(ROSDASH.connect_former.block.id(), evt.cyTarget.id());
			}
			ROSDASH.connect_former.block = undefined;
		} else // connect failed
		{
			ROSDASH.connect_former.block = undefined;
		}
	});
	// update the unselect time stamp
	window.cy.on('unselect', function(evt)
	{
		ROSDASH.connect_former.unselect = new Date().getTime();
	});
}

//------------------- diagram
// save data to json in server
ROSDASH.saveJson = function (data, filename)
{
	$.ajax({
		type: "POST",
		url: "rosdash.php",
		dataType: 'json',
		data: {
				file_name: filename,
				data: data
		},
		success: function( data, textStatus, jqXHR )
		{
			console.log("saveJson success: ", textStatus);
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
			console.log("saveJson error: ", textStatus);
		}
	});
}
ROSDASH.saveDiagram = function ()
{
	var json = {
		user: ROSDASH.user,
		version: ROSDASH.version,
		type: "diagram",
		block: new Object(),
		edge: new Array()
	};
	for (var i in ROSDASH.blocks)
	{
		json.block[i] = ROSDASH.blocks[i];
	}
	window.cy.edges().each(function (i, ele)
	{
		var e = {
			source: ele.source().id(),
			target: ele.target().id()
		};
		json.edge.push(e);
	});
	ROSDASH.saveJson(json, json.user + "-diagram");
}
ROSDASH.loadDiagram = function (json)
{
	// for blocks
	for (var i in json.block)
	{
		switch (json.block[i].type)
		{
		case "topic":
			ROSDASH.addTopic(json.block[i]);
			break;
		default:
			ROSDASH.addBlock(json.block[i]);
			break;
		}
	}
	// for connections
	for (var i in json.edge)
	{
		var source = json.edge[i].source;
		var index = source.lastIndexOf("-");
		var type1 = source.substring(index + 1, index + 2);
		var target = json.edge[i].target;
		index = target.lastIndexOf("-");
		var type2 = target.substring(index + 1, index + 2);
		if ("o" == type1 && "i" == type2)
		{
			ROSDASH.connectBlocks(source, target);
		} else if ("i" == type1 && "o" == type2)
		{
			ROSDASH.connectBlocks(target, source);
		}
	}
	// fit page into best view
	window.cy.fit();
}
ROSDASH.runDiagram = function (user)
{
	ROSDASH.setUser(user);
	ROSDASH.initJson();
	var style = ROSDASH.default_style;
	var element = ROSDASH.default_element;
	var empty_ele = {nodes: new Array(), edges: new Array()};
	// generate an empty cytoscape diagram
	$('#cy').cytoscape({
		layout: {
			name: 'circle'
		},
		style: style,
		elements: empty_ele,
		ready: function()
		{
			window.cy = this;
			// load diagram from json
			$.getJSON('file/' + ROSDASH.user + '-diagram.json', function(data)
			{
				ROSDASH.loadDiagram(data);
				window.cy.elements().unlock();
				window.cy.elements().unselect();
				console.log("load diagram: " + ROSDASH.user + "-diagram.json");
			}).error(function(d) {
				console.error("load diagram error: " + ROSDASH.user + "-diagram.json");
			});
			// set callback functions
			ROSDASH.blockMoveCallback();
			ROSDASH.connectBlocksCallback();
			ROSDASH.selectBlockCallback();
		}
	});
}
//@deprecated
ROSDASH.transformToElements = function (json)
{
	var ele = {
		nodes: new Array(),
		edges: new Array()
	};
	for (var i in json)
	{
		if ("nodes" == json[i].group)
		{
			if (undefined != json[i].data.height)
			{
				json[i].data.height = parseFloat(json[i].data.height);
			}
			if (undefined != json[i].data.weight)
			{
				json[i].data.weight = parseFloat(json[i].data.weight);
			}
			if (undefined != json[i].position)
			{
				json[i].position.x = parseFloat(json[i].position.x);
				json[i].position.y = parseFloat(json[i].position.y);
			}
			ele.nodes.push(json[i]);
		} else if ("edges" == json[i].group)
		{
			if (undefined != json[i].data.strength)
			{
				json[i].data.strength = parseFloat(json[i].data.strength);
			}
			ele.edges.push(json[i]);
		}
	}
	return ele;
}

//------------------- widgets
// set the default value of widget content
ROSDASH.parseWidgetContent = function (widget)
{
	// set default value of content into example data from sDashboard
	switch (widget.widgetType)
	{
	case "text":
		widget.widgetContent = "I am a text widget ^_^";
		break;
	case "table":
		widget.widgetContent = myExampleData.tableWidgetData;
		break;
	case "bubbleChart":
	case "bubble chart":
		widget.widgetType = "chart";
		widget.widgetContent = new Object();
		widget.widgetContent.data = myExampleData.bubbleChartData;
		widget.widgetContent.options = myExampleData.bubbleChartOptions;
		break;
	case "pieChart":
	case "pie chart":
		widget.widgetType = "chart";
		widget.widgetContent = new Object();
		widget.widgetContent.data = myExampleData.pieChartData;
		widget.widgetContent.options = myExampleData.pieChartOptions;
		break;
	case "barChart":
	case "bar chart":
		widget.widgetType = "chart";
		widget.widgetContent = new Object();
		widget.widgetContent.data = myExampleData.barChartData;
		widget.widgetContent.options = myExampleData.barChartOptions;
		break;
	case "chart":
	case "lineChart":
	case "line chart":
		widget.widgetType = "chart";
		widget.widgetContent = new Object();
		widget.widgetContent.data = myExampleData.lineChartData;
		widget.widgetContent.options = myExampleData.lineChartOptions;
		break;
	//@todo should be changed into wdef.init
	case "arbor":
		widget.widgetContent = '<canvas id="viewport" class="sDashboardWidgetContent"></canvas>';
		break;
	case "network":
		widget.widgetContent = '<div id="dracula_canvas" style="height:100%; width:100%;" />';
		break;
	case "doodle god":
		widget.widgetContent = '<object width="180" height="135"><param name="movie" value="http://www.fupa.com/swf/doodle-god/doodlegod.swf"></param><embed src="http://www.fupa.com/swf/doodle-god/doodlegod.swf" type="application/x-shockwave-flash" width="180" height="135"></embed></object>';
		break;
	case "youtube":
		widget.widgetContent = '<iframe src="http://www.youtube.com/embed/SxeVZdJFB4s" frameborder="0" allowfullscreen></iframe>';
		break;
	default:
		widget.widgetContent = '';
		break;
	}
	var wdef = ROSDASH.widget_def[widget.widgetType];
	//@todo remove runNamespace
	if (undefined !== wdef.runNamespace && undefined !== wdef.init)
	{
		var fn = window["ROSDASH"][wdef.runNamespace][wdef.init];
		if (typeof fn == "function")
		{
			widget = fn(widget);
		}
	}
	return widget;
}
// parse the string of "example data" into true value of that
ROSDASH.parseExampleData = function (widget)
{
	if (widget.widgetContent == "myExampleData.textData")
	{
		widget.widgetContent = "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Aenean lacinia mollis condimentum. Proin vitae ligula quis ipsum elementum tristique. Vestibulum ut sem erat.";
	} else if (widget.widgetContent == "myExampleData.tableData")
	{
		widget.widgetContent = myExampleData.tableWidgetData;
	}
	if (typeof widget.widgetContent == "undefined" || typeof widget.widgetContent.data == "undefined")
	{
		return widget;
	}
	switch (widget.widgetContent.data)
	{
	case "myExampleData.bubbleChartData":
		widget.widgetContent.data = myExampleData.bubbleChartData;
		break;
	case "myExampleData.pieChartData":
		widget.widgetContent.data = myExampleData.pieChartData;
		break;
	case "myExampleData.barChartData":
		widget.widgetContent.data = myExampleData.barChartData;
		break;
	case "myExampleData.chartData":
	case "myExampleData.lineChartData":
		widget.widgetContent.data = myExampleData.lineChartData;
		break;
	}
	switch (widget.widgetContent.options)
	{
	case "myExampleData.bubbleChartOptions":
		widget.widgetContent.options = myExampleData.bubbleChartOptions;
		break;
	case "myExampleData.pieChartOptions":
		widget.widgetContent.options = myExampleData.pieChartOptions;
		break;
	case "myExampleData.barChartOptions":
		widget.widgetContent.options = myExampleData.barChartOptions;
		break;
	case "myExampleData.chartOptions":
	case "myExampleData.lineChartOptions":
		widget.widgetContent.options = myExampleData.lineChartOptions;
		break;
	}
	return widget;
}
ROSDASH.widgets = new Object();
ROSDASH.addWidgetByType = function (name)
{
	if (! ROSDASH.checkWidgetTypeValid(name))
	{
		return;
	}
	// set a new count number
	if (undefined === ROSDASH.widget_def[name])
	{
		ROSDASH.widget_def[name] = new Object();
		ROSDASH.widget_def[name].count = 0;
	} else if (undefined === ROSDASH.widget_def[name].count)
	{
		ROSDASH.widget_def[name].count = 0;
	} else
	{
		++ ROSDASH.widget_def[name].count;
	}
	var widget = {
		widgetTitle : name + " " + ROSDASH.widget_def[name].count,
		widgetId : name + "-" + ROSDASH.widget_def[name].count,
		number : ROSDASH.widget_def[name].count,
		widgetType : name,
		widgetContent : undefined,
		// set the position of new widget as 0
		pos : 0
	};
	// move other widgets backward by one
	for (var i in ROSDASH.widgets)
	{
		++ ROSDASH.widgets[i].pos;
	}
	ROSDASH.addWidget(widget);
}
ROSDASH.addWidget = function (def)
{
	// if duplicate widget id
	if (def.widgetId in ROSDASH.widgets)
	{
		console.error("widget id duplicate: " + def.widgetId);
		// show the effect
		$("#myDashboard").sDashboard("addWidget", def);
		return;
	}
	if (! ROSDASH.checkWidgetTypeValid(def.widgetType))
	{
		return;
	}
	// set the widget number
	// if the ROSDASH.widget_def of def.widgetType does not exist - for constant
	if (undefined === ROSDASH.widget_def[def.widgetType])
	{
		ROSDASH.widget_def[def.widgetType] = new Object();
		if (undefined === def.number)
		{
			ROSDASH.widget_def[def.widgetType].count = 0;
			def.number = ROSDASH.widget_def[def.widgetType].count;
		} else
		{
			ROSDASH.widget_def[def.widgetType].count = def.number;
		}
	} else if (undefined === ROSDASH.widget_def[def.widgetType].count)
	{
		if (undefined === def.number)
		{
			ROSDASH.widget_def[def.widgetType].count = 0;
			def.number = ROSDASH.widget_def[def.widgetType].count;
		} else
		{
			ROSDASH.widget_def[def.widgetType].count = def.number;
		}
	} else if (undefined === def.number)
	{
		++ ROSDASH.widget_def[def.widgetType].count;
		def.number = ROSDASH.widget_def[def.widgetType].count;
	} else if (def.number > ROSDASH.widget_def[def.widgetType].count)
	{
			ROSDASH.widget_def[def.widgetType].count = def.number;
	} else
	{
		// if widget number conflicts
		for (var i in ROSDASH.widgets)
		{
			if (ROSDASH.widgets[i].widgetType == def.widgetType && ROSDASH.widgets[i].number == def.number)
			{
				console.error("widget number conflicted: " + def.widgetId);
				// set a new widget number
				++ ROSDASH.widget_def[def.widgetType].count;
				def.number = ROSDASH.widget_def[def.widgetType].count;
			}
		}
	}
	// save the definition of this widget
	ROSDASH.widgets[def.widgetId] = def;
	var widget = ROSDASH.parseExampleData(def);
	widget = ROSDASH.parseWidgetContent(widget);
	$("#myDashboard").sDashboard("addWidget", widget);
}
ROSDASH.removeWidget = function (id)
{
	var pos = ROSDASH.widgets[id].pos;
	// move widgets behind it forward by one
	for (var i in ROSDASH.widgets)
	{
		if (ROSDASH.widgets[i].pos > pos)
		{
			-- ROSDASH.widgets[i].pos;
		}
	}
	delete ROSDASH.widgets[id];
}
// callback function of sDashboard widget move
ROSDASH.moveWidget = function (sorted)
{
	// update all new positions
	for (var i in sorted)
	{
		if (sorted[i].widgetId in ROSDASH.widgets)
		{
			ROSDASH.widgets[sorted[i].widgetId].pos = i;
		}
	}
}
ROSDASH.selectedWidget;
ROSDASH.selectWidgetCallback = function (e, data)
{
	ROSDASH.selectedWidget = data.selectedWidgetId;
	var w = ROSDASH.widgets[ROSDASH.selectedWidget];
	// update the property dialog
	var div = $("#dialog-form");
	if (undefined === w)
	{
		div.find("#property").html("");
		return;
	}
	var html = "";
	html += "<p>type: " + w.widgetType + "</p>";
	html += "<p>id: " + w.widgetId + "</p>";
	html += "<p>pos: " + w.pos + "</p>";
	div.find("#property").html(html);
}

//------------------- panel
ROSDASH.panel_init_count = 4;
ROSDASH.loadPanel = function (json)
{
	var count = 0;
	for (var i in json)
	{
		++ count;
	}
	while (count)
	{
		var max = -1;
		var max_num;
		for (var i in json)
		{
			if (json[i].pos > max)
			{
				max = json[i].pos;
				max_num = i;
			}
		}
		// find the max widget position and add it
		ROSDASH.addWidget(json[max_num]);
		delete json[max_num];
		-- count;
	}
	//@bug add all widgets into diagram_connection, since when adding diagram_connection, the panel is not loaded
	/*for (var i in ROSDASH.widgets)
	{
		if (undefined === ROSDASH.diagram_connection[i])
		{
			ROSDASH.diagram_connection[i] = new Object();
			ROSDASH.diagram_connection[i].parent = new Object();
			ROSDASH.diagram_connection[i].child = new Object();
			ROSDASH.diagram_connection[i].exist = true;
			ROSDASH.diagram_connection[i].done = false;
		} else
		{
			ROSDASH.diagram_connection[i].exist = true;
		}
	}*/
}
ROSDASH.savePanel = function ()
{
	ROSDASH.saveJson(ROSDASH.widgets, ROSDASH.user + "-panel");
}
ROSDASH.runPanel = function (user)
{
	ROSDASH.setUser(user);
	// generate empty dashboard
	$("#myDashboard").sDashboard({
		dashboardData : [],
		disableSelection : ROSDASH.user_conf.disable_selection
	});
	// bind callback functions
	$("#myDashboard").bind("sdashboardorderchanged", function(e, data)
	{
		ROSDASH.moveWidget(data.sortedDefinitions);
	});
	$("#myDashboard").bind("sdashboardheaderclicked", ROSDASH.selectWidgetCallback);
	$("#myDashboard").bind("sdashboardwidgetmaximized", ROSDASH.widgetMaxCallback);
	$("#myDashboard").bind("sdashboardwidgetminimized", ROSDASH.widgetMaxCallback);
	$("#myDashboard").bind("sdashboardwidgetadded", ROSDASH.widgetAddCallback);
	$("#myDashboard").bind("sdashboardwidgetremoved", function(e, data)
	{
		ROSDASH.removeWidget(data.widgetDefinition.widgetId);
	});
	$("#myDashboard").bind("sdashboardwidgetset", ROSDASH.widgetSetCallback);
	$("#myDashboard").bind("sdashboardheaderset", ROSDASH.headerSetCallback);
	
	ROSDASH.initJson();
	ROSDASH.readDiagram();
	// load panel from json
	$.getJSON('file/' + ROSDASH.user + '-panel.json', function(data)
	{
		-- ROSDASH.panel_init_count;
		console.log("load panel: " + ROSDASH.user + "-panel.json");
		//@todo wait until all initializations finish
		function start()
		{
			if (0 >= ROSDASH.panel_init_count)
			{
				ROSDASH.loadPanel(data);
				// start to run widgets
				ROSDASH.updateOnceWidgets();
				ROSDASH.updateWidgets();
			} else
			{
				setTimeout(start, 300);
			}
		}
		start();
	}).error(function(d) {
		console.error("load panel error: " + ROSDASH.user + "-panel.json");
	});
}

//------------------- diagram analysis
ROSDASH.diagram;
// read diagram json for panel execution
ROSDASH.readDiagram = function ()
{
	$.getJSON('file/' + ROSDASH.user + '-diagram.json', function(data)
	{
		-- ROSDASH.panel_init_count;
		console.log("read diagram: " + ROSDASH.user + '-diagram.json');
		ROSDASH.diagram = data;
		ROSDASH.traverseDiagram();
	}).error(function(d) {
		console.error("read diagram error: " + ROSDASH.user + '-diagram.json');
	});
}
ROSDASH.diagram_connection = new Object();
// traverse the diagram to obtain the connection relations
ROSDASH.traverseDiagram = function ()
{
	// for each edge
	for (var i in ROSDASH.diagram.edge)
	{
		var edge = ROSDASH.diagram.edge[i];
		// obtain one block of the edge
		var index = edge.source.lastIndexOf("-");
		var block1 = edge.source.substring(0, index);
		if (undefined === ROSDASH.diagram_connection[block1])
		{
			ROSDASH.diagram_connection[block1] = new Object();
			ROSDASH.diagram_connection[block1].parent = new Object();
			ROSDASH.diagram_connection[block1].output = new Object();
			ROSDASH.diagram_connection[block1].exist = false;
			ROSDASH.diagram_connection[block1].done = false;
		}
		var type1 = edge.source.substring(index + 1);
		// obtain the other block of the edge
		index = edge.target.lastIndexOf("-");
		var block2 = edge.target.substring(0, index);
		if (undefined === ROSDASH.diagram_connection[block2])
		{
			ROSDASH.diagram_connection[block2] = new Object();
			ROSDASH.diagram_connection[block2].parent = new Object();
			ROSDASH.diagram_connection[block2].output = new Object();
			ROSDASH.diagram_connection[block2].exist = false;
			ROSDASH.diagram_connection[block2].done = false;
		}
		var type2 = edge.target.substring(index + 1);
		// save into ROSDASH.diagram_connection
		if (type1.substring(0, 1) == "i" && type2.substring(0, 1) == "o")
		{
			ROSDASH.diagram_connection[block1].parent[type1] = block2;
			ROSDASH.diagram_connection[block1].output[type1] = type2;
		} else if (type1.substring(0, 1) == "o" && type2.substring(0, 1) == "i")
		{
			ROSDASH.diagram_connection[block2].parent[type2] = block1;
			ROSDASH.diagram_connection[block2].output[type2] = type1;
		}
	}
	// for each block
	for (var i in ROSDASH.diagram.block)
	{
		// if it is not in the connection
		if (undefined === ROSDASH.diagram_connection[i])
		{
			// generate that block with no connection
			ROSDASH.diagram_connection[i] = new Object();
			ROSDASH.diagram_connection[i].parent = new Object();
			ROSDASH.diagram_connection[i].output = new Object();
			ROSDASH.diagram_connection[i].exist = true;
			ROSDASH.diagram_connection[i].done = false;
		} else // if in the connection
		{
			// validate the existence of the block
			ROSDASH.diagram_connection[i].exist = true;
		}
	}
}

//------------------- diagram execution
ROSDASH.diagram_output = new Object();
ROSDASH.updateOnceWidgets = function ()
{
	/*var widget_exec = new Object();
	widget_exec["constant1"] = new ROSDASH.Constant2({value: 123});
	console.debug(widget_exec["constant1"].run());*/

	for (var i in ROSDASH.diagram_connection)
	{
		// validate the existence of each block just once
		if (! ROSDASH.diagram_connection[i].exist)
		{
			console.error("widget does not exist: "+ i);
			continue;
		}
		var widget = ROSDASH.widget_def[ROSDASH.diagram.block[i].type];
		// if widget has runOnce function
		if (undefined !== widget.runNamespace && undefined !== widget.runOnce)
		{
			var fn = window["ROSDASH"][widget.runNamespace][widget.runOnce];
			// if runOnce function is valid
			if (typeof fn == "function")
			{
				fn(ROSDASH.diagram.block[i]);
			} else
			{
				console.error("widget's runOnce function does not exist: " + i);
				continue;
			}
		} else
		{
			continue;
		}
	}
}
ROSDASH.done_count = 0;
ROSDASH.updateWidgets = function ()
{
	ROSDASH.done_count = 0;
	var last_count = -1;
	// reset all blocks as undone
	for (var i in ROSDASH.diagram_connection)
	{
		ROSDASH.diagram_connection[i].done = false;
	}
	// if ROSDASH.done_count does not change, the diagram execution ends
	while (last_count < ROSDASH.done_count)
	{
		last_count = ROSDASH.done_count;
		for (var i in ROSDASH.diagram_connection)
		{
			if (! ROSDASH.diagram_connection[i].exist || ROSDASH.diagram_connection[i].done)
			{
				continue;
			}
			var ready_flag = true;
			var input = new Object();
			// for all the parents of this block
			for (var j in ROSDASH.diagram_connection[i].parent)
			{
				// if the parent is not ready
				if (! (ROSDASH.diagram_connection[i].parent[j] in ROSDASH.diagram_output) || undefined === ROSDASH.diagram_output[ROSDASH.diagram_connection[i].parent[j]])
				{
					ready_flag = false;
					break;
				} else
				{
					// get the corresponding order of this input
					var count = j.substring(1);
					// save this input
					input[count] = ROSDASH.diagram_output[ROSDASH.diagram_connection[i].parent[j]][ROSDASH.diagram_connection[i].output[j]];
				}
			}
			// if the block is ready to be execute with all the inputs are ready
			if (ready_flag)
			{
				var widget = ROSDASH.widget_def[ROSDASH.diagram.block[i].type];
				// if no run function
				if (undefined === widget.runNamespace || undefined === widget.run)
				{
					continue;
				}
				var fn = window["ROSDASH"][widget.runNamespace][widget.run];
				//@todo should be checked earlier and once
				// if run function does not exist
				if (typeof fn != "function")
				{
					continue;
				}
				// save the output into ROSDASH.diagram_output
				ROSDASH.diagram_output[i] = fn(ROSDASH.diagram.block[i], input);
				ROSDASH.diagram_connection[i].done = true;
				++ ROSDASH.done_count;
			}
		}
	}
	// sleep for a while and start next cycle
	setTimeout(ROSDASH.updateWidgets, ROSDASH.user_conf.run_msec);
}

//------------------- panel callback
ROSDASH.widgetMaxCallback = function (e, data)
{
	switch (data.widgetDefinition.widgetType)
	{
	case "gmap":
		ROSDASH.Gmap.resizeGmap();
		break;
	case "arbor":
		//arborInit();
		break;
	case "network":
		draculaInit("dracula_canvas");
		break;
	}
}
//@todo
// init the HTML for each widget when it is added
ROSDASH.widgetAddCallback = function (e, data)
{
	switch (data.widgetDefinition.widgetType)
	{
	case "gmap":
		ROSDASH.Gmap.initGmap();
		break;
	case "arbor":
		arborInit();
		break;
	case "network":
		draculaInit("dracula_canvas");
		break;
	}
}
ROSDASH.widgetSetCallback = function (e, data)
{
	for (var i in data)
	{
		//console.log(data[i]);
	}
}
ROSDASH.headerSetCallback = function (e, data)
{
	for (var i in data)
	{
		//console.log(data[i]);
	}
}

//@todo
ROSDASH.addToDiagram = function ()
{
	if (undefined === ROSDASH.selectedWidget)
	{
		console.error("cannot add to diagram");
		return;
	}
	var find = ROSDASH.selectedWidget.lastIndexOf("-");
	var widget_type = ROSDASH.selectedWidget.substring(0, find);
	var widget_num = parseFloat(ROSDASH.selectedWidget.substring(find));
	ROSDASH.diagram.block[ROSDASH.selectedWidget] = {
		id: ROSDASH.selectedWidget,
		type: widget_type,
		number: widget_num,
		x: 400,
		y: 0
	};
	ROSDASH.saveJson(ROSDASH.diagram, "test4-diagram");
}
