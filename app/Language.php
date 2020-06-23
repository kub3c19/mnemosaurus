<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Locale;

class Language extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['code', 'created_at', 'updated_at'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['name'];

    /**
     * Get the language name in Slovak.
     *
     * @return bool
     */
    public function getNameAttribute()
    {
        return Locale::getDisplayLanguage($this->attributes['code'], 'sk');
    }
}
