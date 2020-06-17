<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mnemonic extends Model
{
    /**
     * Get the expressions pair that owns the mnemonic.
     */
    public function expressionExpression()
    {
        return $this->belongsTo('App\ExpressionExpression');
    }
}
