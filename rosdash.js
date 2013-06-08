var ROSDASH = new Object();
ROSDASH.version = "1.0";
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

//----------- with regard to ROS
ROSDASH.ros;
ROSDASH.connectROS = function (host, port)
{
	host = (typeof host !== 'undefined') ? host : "localhost";
	port = (typeof port !== 'undefined') ? port : "9090";
	ROSDASH.ros = new ROSLIB.Ros();
	ROSDASH.ros.on('error', function(error) {
		console.error(error);
	});
	ROSDASH.ros.on('connection', function() {
		console.log('ROS connection made!');
	});
	ROSDASH.ros.connect('ws://' + host + ':' + port);
}
ROSDASH.topics = new Array();
ROSDASH.services = new Array();
ROSDASH.params = new Array();
ROSDASH.getROSNames = function (ros)
{
	ROSDASH.topics = new Array();
	ROSDASH.services = new Array();
	ROSDASH.params = new Array();
	ros.getTopics(function (topics)
	{
		ROSDASH.topics = topics;
		console.debug('ros topics: ');
		console.debug(topics);
	});
	ros.getServices(function (services)
	{
		ROSDASH.services = services;
		console.debug('ros services: ');
		console.debug(services);
	});
	ros.getParams(function (params)
	{
		ROSDASH.params = params;
		console.debug('ros params: ');
		console.debug(params);
	});
}
ROSDASH.checkROSValid = function (name, type)
{
	type = (typeof type !== 'undefined') ? type : "topic";
	var array;
	switch (type)
	{
	case "topic":
		array = ROSDASH.topics;
		break;
	case "service":
		array = ROSDASH.services;
		break;
	case "param":
		array = ROSDASH.params;
		break;
	}
	return (jQuery.inArray(name, array) != -1);
}
ROSDASH.ros_blocks = {
	topic: new Array(),
	service: new Array(),
	param: new Array()
};
//@todo need to change to blocks
ROSDASH.checkROSConflict = function (name, type)
{
	return (-1 == jQuery.inArray(name, ROSDASH.ros_blocks[type]));
}

//----------- with regard to blocks
var NEW_POS = [400, 0];
//@todo
ROSDASH.getNextNewBlockPos = function ()
{
	return NEW_POS;
}
//@todo merge with block
ROSDASH.addTopic = function (name, x, y)
{
	if ("" == name) // ! ROSDASH.checkROSValid(name, "topic") || ! ROSDASH.checkROSConflict(name, "topic"))
	{
		console.error("topic name not valid: " + name);
		return;
	}
	var next_pos = ROSDASH.getNextNewBlockPos();
	x = (typeof x !== 'undefined') ? x : next_pos[0];
	y = (typeof y !== 'undefined') ? y : next_pos[1];
	window.cy.add({
		group: "nodes",
		data: {
			id: "topic_" + name,
			name: name,
			weight: 65,
			faveColor: "green",
			faveShape: "rectangle"
		},
		position: { x: x, y: y },
		classes: "body"
	});
	window.cy.add({
		group: "nodes",
		data: {
			id: "topic_" + name + "-o0",
			weight: 10,
			height: 20,
			faveColor: "grey",
			faveShape: "rectangle"
		},
		position: { x: x + 70, y: y },
		classes: "output",
		locked: true
	});
	ROSDASH.ros_blocks.topic.push(name);
	var block = {
		id: "topic_" + name,
		type: "topic",
		number: ROSDASH.ros_blocks.topic.length,
		input_num: 0,
		output_num: 1
	};
	ROSDASH.blocks["topic_" + name] = block;
	ROSDASH.saveDiagram();
}
ROSDASH.blocks = new Object();
ROSDASH.block_type = new Object();
ROSDASH.checkBlockNameValid = function (name)
{
	if (undefined === name || "" == name || " " == name || ! ROSDASH.checkWidgetNameValid(name))
	{
		console.error("block name not valid: " + name);
		return false;
	}
	return true;
}
ROSDASH.addBlock = function (name, x, y)
{
	if (! ROSDASH.checkBlockNameValid(name))
	{
		return;
	}
	var next_pos = ROSDASH.getNextNewBlockPos();
	x = (typeof x !== 'undefined') ? x : next_pos[0];
	y = (typeof y !== 'undefined') ? y : next_pos[1];
	if (ROSDASH.block_type[name] === undefined)
	{
		ROSDASH.block_type[name] = new Object();
		ROSDASH.block_type[name].count = 0;
	} else
	{
		++ ROSDASH.block_type[name].count;
	}
	var block = {
		type: name,
		number: ROSDASH.block_type[name].count,
		id: name + "-" +  ROSDASH.block_type[name].count,
		name: name + " " +  ROSDASH.block_type[name].count,
	};
	window.cy.add({
		group: "nodes",
		data: {
			id: block.id,
			name: block.name,
			weight: 70,
			faveColor: "blue",
			faveShape: "rectangle"
		},
		position: { x: x, y: y },
		classes: "body"
	});
	//@todo
	var widget_template = ROSDASH.getWidgetDef(name);
	//@todo change input_num to block_type
	block.input_num = widget_template.input_num;
	for (var i = 0; i < block.input_num; ++ i)
	{
		window.cy.add({
			group: "nodes",
			data: {
				id: block.id + "-i" + i,
				weight: 5,
				height: 5,
				faveColor: "grey",
				faveShape: "rectangle"
			},
			position: { x: x - 70, y: y },
			classes: "input",
			locked: true
		});
	}
	block.output_num = widget_template.output_num;
	for (var i = 0; i < block.output_num; ++ i)
	{
		window.cy.add({
			group: "nodes",
			data: {
				id: block.id + "-o" + i,
				weight: 5,
				height: 5,
				faveColor: "grey",
				faveShape: "rectangle"
			},
			position: { x: x + 70, y: y },
			classes: "output",
			locked: true
		});
	}
	ROSDASH.blocks[block.id] = block;
	ROSDASH.saveDiagram();
}
ROSDASH.removeBlockCallback = function ()
{
	var ele = window.cy.$(':selected');
	var name = $("#topic").val();
	// priority on selected elements
	if (ele.size() > 0)
	{
		ele.remove();
		ROSDASH.saveDiagram();
	} else if (undefined != name && "" != name)
	{
		ele = cy.nodes('[id = "' + name + '"]');
		if (0 == ele.size())
		{
			ele = cy.nodes('[name = "' + name + '"]');
		}
		if (0 < ele.size())
		{
			ele.remove();
			ROSDASH.saveDiagram();
		}
	}
}
ROSDASH.followBlock = function (target)
{
	var id = target.id();
	if (undefined != ROSDASH.blocks[id])
	{
		var pin_num = ROSDASH.blocks[id].input_num;
		for (var i = 0; i < pin_num; ++ i)
		{
			window.cy.nodes('[id = "' + id + "-i" + i + '"]').positions(function (i, ele)
			{
				ele.position({
					x: target.position('x') - 70,
					y: target.position('y')
				});
			});
		}
		pin_num = ROSDASH.blocks[id].output_num;
		for (var i = 0; i < pin_num; ++ i)
		{
			window.cy.nodes('[id = "' + id + "-o" + i + '"]').positions(function (i, ele)
			{
				ele.position({
					x: target.position('x') + 70,
					y: target.position('y')
				});
			});
		}
	}
}
ROSDASH.blockMoveCallback = function ()
{
	window.cy.on('position', function(evt)
	{
		ROSDASH.followBlock(evt.cyTarget);
	});
	window.cy.on('free', function(evt)
	{
		ROSDASH.saveDiagram();
	});
}
ROSDASH.connect_former = new Object();
ROSDASH.connectBlocks = function (source, target)
{
	//@todo if source and target exist
	window.cy.add({
		group: "edges",
		"data": {
		"source": source,
		"target": target,
		"faveColor": "grey",
		"strength": 10
		}
	});
	ROSDASH.saveDiagram();
}
ROSDASH.connectBlocksCallback = function ()
{
	window.cy.on('select', function(evt)
	{
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
		// if no former or unselected the former
		if (undefined === ROSDASH.connect_former.block || new Date().getTime() - ROSDASH.connect_former.unselect > 300)
		{
			ROSDASH.connect_former.block = evt.cyTarget;
			ROSDASH.connect_former.type = connect_type;
		} else if (undefined != ROSDASH.connect_former.block && connect_type != ROSDASH.connect_former.type)
		{
			ROSDASH.connectBlocks(ROSDASH.connect_former.block.id(), evt.cyTarget.id());
			ROSDASH.connect_former.block = undefined;
		} else
		{
			ROSDASH.connect_former.block = undefined;
		}
	});
	window.cy.on('unselect', function(evt)
	{
		ROSDASH.connect_former.unselect = new Date().getTime();
	});
}

//----------- with regard to diagram
ROSDASH.user = "test4";
ROSDASH.version = "1.0";
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
			console.log("ajax success: " + textStatus);
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
			console.log("ajax error: " + textStatus);
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
		//@todo save the position into blocks
		json.block[i].x = window.cy.$("#" + ROSDASH.blocks[i].id).position('x');
		json.block[i].y = window.cy.$("#" + ROSDASH.blocks[i].id).position('y');
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
	for (var i in json.block)
	{
		var x = parseFloat(json.block[i].x);
		var y = parseFloat(json.block[i].y);
		switch (json.block[i].type)
		{
		case "topic":
			ROSDASH.addTopic(i.substring(6), x, y);
			break;
		default:
			ROSDASH.addBlock(json.block[i].type, x, y);
			break;
		}
	}
	for (var i in json.edge)
	{
		ROSDASH.connectBlocks(json.edge[i].source, json.edge[i].target);
	}
	window.cy.fit();
}
ROSDASH.readBlockCallback = function ()
{
	$.getJSON('file/' + ROSDASH.user + '-diagram.json', function(data)
	{
		ROSDASH.loadDiagram(data);
	});
}
// deprecated
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

//----------- with regard to widget definitions
ROSDASH.msg_json = {
	"std_msgs": new Object()
};
ROSDASH.widget_json = {
	"widgets": new Object()
};
ROSDASH.initJson = function ()
{
	for (var i in ROSDASH.msg_json)
	{
		$.getJSON("param/" + i + ".json", function(data, status, xhr)
		{
			for (var j in data)
			{
				ROSDASH.msg_json[j] = data;
				console.log("load msgs " + i + ": " + j);
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
				console.log("load widgets " + i + ": " + j);
			}
		});
	}
}
ROSDASH.getWidgetDef = function (name)
{
	for (var i in ROSDASH.widget_json)
	{
		var json = ROSDASH.widget_json[i];
		for (var j in json)
		{
			var json2 = json[j];
			if (undefined === json2.type)
			{
				for (var k in json2)
				{
					if (json2[k].type == name)
					{
						return json2[k];
					}
				}
			} else
			{
				if (json2.type == name)
				{
					return json2;
				}
			}
		}
	}
	console.error("wrong widget name: " + name);
	return undefined;
}
ROSDASH.checkWidgetNameValid = function (name)
{
	return (undefined != ROSDASH.getWidgetDef(name));
}

//----------- with regard to widgets
ROSDASH.parseWidgetContent = function (widget)
{
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
	case "gmap":
		widget.widgetContent = '<div id="map-canvas" class="sDashboardWidgetContent" />';
		break;
	case "arbor":
		widget.widgetContent = '<canvas id="viewport" class="ArborWidgetContent"></canvas>';
		break;
	case "network":
		widget.widgetContent = '<div id="dracula_canvas" class="draculaWidgetContent"></div>';
		break;
	case "doodle god":
		widget.widgetContent = '<object width="180" height="135"><param name="movie" value="http://www.fupa.com/swf/doodle-god/doodlegod.swf"></param><embed src="http://www.fupa.com/swf/doodle-god/doodlegod.swf" type="application/x-shockwave-flash" width="180" height="135"></embed></object>';
		break;
	case "youtube":
		widget.widgetContent = '<iframe height="180" src="http://www.youtube.com/embed/SxeVZdJFB4s" frameborder="0" allowfullscreen></iframe>';
		break;
	default:
		widget.widgetContent = '';
		break;
	}
	return widget;
}
//@deprecated
ROSDASH.parseOneExampleData = function (widget)
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
//@deprecated
ROSDASH.parseExampleData = function (widgets)
{
	for (var i in widgets)
	{
		ROSDASH.parseOneExampleData(widgets[i]);
	}
	return widgets;
}
ROSDASH.widget_type = new Object();
ROSDASH.addWidget = function (name)
{
	if (undefined != name && "" != name) // && ROSDASH.checkWidgetNameValid(name))
	{
		if (undefined === ROSDASH.widget_type[name])
		{
			ROSDASH.widget_type[name] = new Object();
			ROSDASH.widget_type[name].count = 0;
		} else
		{
			++ ROSDASH.widget_type[name].count;
		}
		var widget = {
			widgetTitle : name + " " + ROSDASH.widget_type[name].count,
			widgetId : name + "-" + ROSDASH.widget_type[name].count,
			widgetType : name,
			widgetContent : undefined
		};
		widget = ROSDASH.parseWidgetContent(widget);
		$("#myDashboard").sDashboard("addWidget", widget);
		//ROSDASH.savePanel();
	}
}
ROSDASH.selectedWidget;

//----------- with regard to panel
ROSDASH.loadPanel = function (json)
{
	// actually json is an object instead of an array
	if (typeof json != "array" && typeof json != "object")
	{
		return;
	}
	for (var i = json.length - 1; i >= 0; -- i)
	{
		ROSDASH.addWidget(json[i].widgetType);
	}
}
ROSDASH.savePanel = function (sorted_widgets)
{
	ROSDASH.saveJson(sorted_widgets, ROSDASH.user + "-panel");
}

//----------- with regard to diagram execution
ROSDASH.diagram;
// read diagram json for panel analysis
ROSDASH.readDiagram = function ()
{
	$.getJSON('file/' + ROSDASH.user + '-diagram.json', function(data)
	{
		console.log("read diagram: " + ROSDASH.user + '-diagram.json');
		ROSDASH.diagram = data;
		ROSDASH.traverseDiagram();
	});
}
ROSDASH.diagram_connection = new Object();
ROSDASH.traverseDiagram = function ()
{
	for (var i in ROSDASH.diagram.edge)
	{
		var edge = ROSDASH.diagram.edge[i];
		var index = edge.source.lastIndexOf("-");
		var block1 = edge.source.substring(0, index - 1);
		if (undefined === ROSDASH.diagram_connection[block1])
		{
			ROSDASH.diagram_connection[block1] = new Object();
			ROSDASH.diagram_connection[block1].parent = new Object();
			ROSDASH.diagram_connection[block1].child = new Object();
			ROSDASH.diagram_connection[block1].exist = false;
		}
		var type1 = edge.source.substring(index + 1);
		var block2 = edge.target.substring(0, index - 1);
		if (undefined === ROSDASH.diagram_connection[block2])
		{
			ROSDASH.diagram_connection[block2] = new Object();
			ROSDASH.diagram_connection[block2].parent = new Object();
			ROSDASH.diagram_connection[block2].child = new Object();
			ROSDASH.diagram_connection[block1].exist = false;
		}
		var type2 = edge.target.substring(index + 1);
		if (type1.substring(0, 1) == "i" && type2.substring(0, 1) == "o")
		{
			ROSDASH.diagram_connection[block1].parent[block2] = type2;
			ROSDASH.diagram_connection[block2].child[block1] = type1;
		} else if (type1.substring(0, 1) == "o" && type2.substring(0, 1) == "i")
		{
			ROSDASH.diagram_connection[block2].parent[block1] = type1;
			ROSDASH.diagram_connection[block1].child[block2] = type2;
		}
	}
	for (var i in ROSDASH.diagram.block)
	{
		if (undefined === ROSDASH.diagram_connection[i])
		{
			ROSDASH.diagram_connection[i] = new Object();
			ROSDASH.diagram_connection[i].parent = new Object();
			ROSDASH.diagram_connection[i].child = new Object();
			ROSDASH.diagram_connection[i].exist = true;
		} else
		{
			ROSDASH.diagram_connection[i].exist = true;
		}
	}
	console.debug(ROSDASH.diagram_connection);
}
ROSDASH.diagram_output = new Object();
ROSDASH.updateOnceWidgets = function ()
{
	ROSDASH.Widgets.topic('/listener', 'std_msgs/String');
}
ROSDASH.updateWidgets = function ()
{
	ROSDASH.Widgets.text("text-0", "topic /listener", ROSDASH.Widgets.msgToStr(ROSDASH.rosMsg['/listener']));
	setTimeout(ROSDASH.updateWidgets, 200);
}

//----------- with regard to widget execution
// class declaration
ROSDASH.Widgets = new Object();
ROSDASH.rosMsg = new Object();
ROSDASH.Widgets.topic = function (name, type)
{
	ROSDASH.rosMsg[name] = "cannot connect to ROS";
	var listener = new ROSLIB.Topic({
		ros : ROSDASH.ros,
		name : name,
		messageType : type
	});
	listener.subscribe(function(message)
	{
		ROSDASH.rosMsg[name] = message;
		//listener.unsubscribe();
	});
}
ROSDASH.Widgets.msgToStr = function (msg)
{
	var str = "";
	if (typeof msg == "object" || typeof msg == "array")
	{
		for (var i in msg)
		{
			str += " ( " + i + ": ";
			str += ROSDASH.msgToStr(msg[i]);
			str += " ) ";
		}
	} else
	{
		str += msg;
	}
	return str;
}
ROSDASH.Widgets.text = function (id, header, content)
{
	$("#myDashboard").sDashboard("setContentById", id, content);
	$("#myDashboard").sDashboard("setHeaderById", id, header);
}
ROSDASH.widgetMaxCallback = function (e, data)
{
	switch (data.widgetDefinition.widgetType)
	{
	case "gmap":
		ROSDASH.resizeGmap();
		break;
	case "arbor":
		//arborInit();
		break;
	case "network":
		draculaInit("dracula_canvas");
		break;
	}
}
ROSDASH.widgetAddCallback = function (e, data)
{
	switch (data.widgetDefinition.widgetType)
	{
	case "gmap":
		ROSDASH.initGmap();
		break;
	case "arbor":
		arborInit();
		break;
	case "network":
		draculaInit("dracula_canvas");
		break;
	}
}
ROSDASH.widgetRemoveCallback = function (e, data)
{
	//console.log(data.widgetDefinition);
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


//----------- with regard to specific widget
ROSDASH.gmap = undefined;
ROSDASH.initGmap = function ()
{
	if ($("#map-canvas").length)
	{
		var mapOptions = {
		  center: new google.maps.LatLng(-34.397, 150.644),
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		ROSDASH.gmap = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
	} else
	{
		setTimeout(ROSDASH.initGmap, 300);
	}
}
ROSDASH.resizeGmap = function ()
{
	google.maps.event.trigger(ROSDASH.gmap, "resize");
}
