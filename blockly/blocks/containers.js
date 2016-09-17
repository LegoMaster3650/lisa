/**
 * Created by Dinesh Liyanage on 9/10/2016.
 * @Description : This file contains the block definitions for the blocks used in Lisa.
 *                If you need to define a new block, create it with Block Factory.
 * @modified : 09/14/2016
 */

'use strict';

goog.provide('Blockly.Blocks.test');
goog.require('Blockly.Blocks');

var tooltip_class_container = 'Container which can hold variable-container, method-container, constructor-container';
var tooltip_variable_container = 'Container which can hold only variable blocks';
var tooltip_method_container = 'Container which can hold only method blocks';

/**
 * This is the definition for the class container block
 */
Blockly.Blocks['class-container'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("class")
            .appendField(new Blockly.FieldTextInput("sampleClass"), "class_name");
        this.appendStatementInput("class_body")
            .setCheck(["variable-container", "method-container", "class-container"])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setInputsInline(true);
        this.setColour(240);
        this.setTooltip(tooltip_class_container);
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};

/**
 * This is the definition for the variable container block
 */
Blockly.Blocks['variable-container'] = {
    init: function() {
        this.appendStatementInput('variables')
            .setCheck("variable")
            .appendField(new Blockly.FieldDropdown([['private', 'private'], ['public', 'public'], ['protected', 'protected'], ['default', 'default']]), 'access-modifier');
        this.setInputsInline(false);
        this.setPreviousStatement(true, ['class-container', 'variable-container', 'method-container']);
        this.setNextStatement(true, ['class-container', 'variable-container', 'method-container']);
        this.setColour(20);
        this.setTooltip(tooltip_variable_container);
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};

/**
 * This is the definition for the method container block
 */
Blockly.Blocks['method-container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["public", "public"], ["protected", "protected"], ["private", "private"]]), "access-modifier");
    this.appendStatementInput("inputs")
        .setCheck("method");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, ["method-container", "constructor-container", "variable-container"]);
    this.setColour(65);
    this.setTooltip(tooltip_method_container);
    this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
  }
};

