<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mnemonic extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['text', 'expression_expression_id'];

    /**
     * Get the expressions pair that owns the mnemonic.
     */
    public function expressionExpression()
    {
        return $this->belongsTo('App\ExpressionExpression');
    }
}
