<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expression extends Model
{
    /**
     * Get the language of the expression.
     */
    public function language()
    {
        return $this->belongsTo('App\Language');
    }

    /**
     * Get the expressions pairs associated with the expression.
     */
    public function expressionExpression()
    {
        return $this->hasMany('App\ExpressionExpression');
    }
}
